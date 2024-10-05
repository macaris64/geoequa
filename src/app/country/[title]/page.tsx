"use client";

import { useState, useCallback } from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import MapChart from "@/app/components/map/MapChart";
import {aiSystemInstruction, countryData} from "@/app/data";
import { ChatUI } from "@/app/components/chat/ChatUI"; // ChatUI bileşenini içe aktar
import { MessageRole } from "@/app/components/chat/enums/MessageRole";
import { Conversations, Message } from "@/app/components/chat/types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CountryChartDetail = ({ params }) => {
    const title = params.title.replace(/-/g, ' ');
    const chartData = countryData.find(data => data.title === decodeURIComponent(title));
    const [isChatOpen, setChatOpen] = useState(false);
    const [isQuerying, setIsQuerying] = useState(false);
    const [chatConversations, setChatConversations] = useState<Conversations>(initializeChat());
    const initialAIMessage = aiSystemInstruction(JSON.stringify(chartData?.data));
    const handleSubmit = useCallback(async (value: string) => {
        setIsQuerying(true);
        const newUserMessage = createNewUserMessage(value, chatConversations.length);

        setChatConversations(prevConversations => [...prevConversations, newUserMessage]);

        const loadingMessage = createLoadingMessage(chatConversations.length);
        setChatConversations(prevConversations => [...prevConversations, loadingMessage]);

        try {
            const assistantMessage = await fetchAssistantResponse(initialAIMessage, [...chatConversations, newUserMessage]);
            setChatConversations(prevConversations => [
                ...prevConversations.slice(0, -1),
                assistantMessage
            ]);
        } catch (error) {
            console.error("Error fetching from OpenAI:", error);
            handleErrorFetching(chatConversations, setChatConversations);
        } finally {
            setIsQuerying(false);
        }
    }, [chatConversations, initialAIMessage]);

    if (!chartData) {
        return <div>{'No data'}</div>;
    }

    const breadcrumbItems = generateBreadcrumbItems(params.title, chartData.title);

    const toggleChat = () => {
        setChatOpen(prevState => !prevState);
        if (!isChatOpen) {
            sendInitialAIMessage();
        }
    };

    const sendInitialAIMessage = async () => {
        setIsQuerying(true);
        const loadingMessage = createLoadingMessage(chatConversations.length);
        setChatConversations(prevConversations => [...prevConversations, loadingMessage]);

        try {
            const assistantMessage = await fetchAssistantResponse(initialAIMessage, chatConversations);
            setChatConversations(prevConversations => [
                ...prevConversations.slice(0, -1), // Loading mesajını kaldır
                assistantMessage,
            ]);
        } catch (error) {
            console.error("Error fetching from OpenAI:", error);
            handleErrorFetching(chatConversations, setChatConversations);
        } finally {
            setIsQuerying(false);
        }
    };

    return (
        <div className="flex h-screen">
            <div className={`flex-grow p-5 ${isChatOpen ? 'w-1/2' : 'w-full'}`}>
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-4xl font-bold mb-4">{chartData.title}</h1>
                <p className="mb-4">{chartData.description}</p>

                <div className="relative w-full bg-white p-4">
                    <MapChart data={chartData} />
                    <button
                        onClick={toggleChat}
                        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded z-10"
                    >
                        {isChatOpen ? 'Close Assistant' : 'Open Assistant'}
                    </button>
                </div>
            </div>
            {isChatOpen && (
                <div className="w-1/2 border-l border-gray-300 flex flex-col">
                    <ChatUI
                        isQuerying={isQuerying}
                        onSubmit={handleSubmit}
                        placeholder="Type a message..."
                        disabled={false}
                        conversations={chatConversations}
                        customSubmitIcon={null}
                    />
                </div>
            )}
        </div>
    );
};

// Helper functions
const initializeChat = (): Conversations => [
    {
        id: "1",
        role: MessageRole.ASSISTANT,
        message: "Hello, How can I assist you today?",
    },
];

const generateBreadcrumbItems = (paramsTitle: string, chartTitle: string) => [
    { label: 'Home', href: '/' },
    { label: 'Country Data', href: '/country' },
    { label: chartTitle, href: `/country/${paramsTitle}` }
];

const createNewUserMessage = (value: string, index: number): Message => ({
    userInfo: { firstName: 'User', lastName: '' },
    id: (index + 1).toString(),
    role: MessageRole.USER,
    message: value,
});

const createLoadingMessage = (index: number): Message => ({
    id: (index + 2).toString(),
    role: MessageRole.ASSISTANT,
    message: "Loading...",
});

const fetchAssistantResponse = async (initialAIMessage: string, messages: Conversations): Promise<Message> => {
    const formattedMessages = messages.map(entry => ({
        role: entry.role === MessageRole.USER ? 'user' : 'assistant',
        content: entry.message,
    }));

    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            messages: [
                { role: "system", content: initialAIMessage },
                ...formattedMessages
            ]
        }),
    });

    const data = await response.json();
    return {
        id: (messages.length + 1).toString(),
        role: MessageRole.ASSISTANT,
        message: data.response,
    };
};

const handleErrorFetching = (prevConversations: Conversations, setChatConversations: React.Dispatch<React.SetStateAction<Conversations>>) => {
    setChatConversations(prevConversations => [
        ...prevConversations.slice(0, -1),
        {
            id: (prevConversations.length + 1).toString(),
            role: MessageRole.ASSISTANT,
            message: "Sorry, I couldn't fetch a response from the server.",
        },
    ]);
};

export default CountryChartDetail;
