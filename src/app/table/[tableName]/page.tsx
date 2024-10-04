"use client";

import { useCallback, useState } from "react";
import { useParams } from 'next/navigation';
import { faMailReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Table from "@/app/components/table";
import { aiSystemInstruction, aiTestUserInfo, allData } from "@/app/data";
import Breadcrumb from "@/app/components/breadcrumb";
import { ChatUI } from "@/app/components/chat/ChatUI";
import { MessageRole } from "@/app/components/chat/enums/MessageRole";
import { Conversations, Message } from "@/app/components/chat/types";

const TableDetail: React.FC = () => {
    const { tableName } = useParams();
    const tableData = allData.find(item =>
        item.title.replace(/\s+/g, '-').toLowerCase() === tableName
    );

    const [isQuerying, setIsQuerying] = useState<boolean>(false);
    const [chatConversations, setChatConversations] = useState<Conversations>(initializeChat());

    if (!tableData) {
        return <div>Table not found</div>;
    }

    const initialAIMessage = aiSystemInstruction(JSON.stringify(tableData.data));
    const breadcrumbItems = generateBreadcrumbItems(tableData.category, tableData.title);

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

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <Table
                title={tableData.title}
                description={tableData.description}
                columns={Object.keys(tableData.data[0])}
                data={tableData.data}
            />
            <ChatUI
                isQuerying={isQuerying}
                onSubmit={handleSubmit}
                placeholder="Write a message..."
                disabled={isQuerying}
                conversations={chatConversations}
                customSubmitIcon={<FontAwesomeIcon icon={faMailReply} />}
            />
        </>
    );
};

const initializeChat = (): Conversations => [
    {
        id: "1",
        role: MessageRole.ASSISTANT,
        message: "Hello, How can I assist you today?",
    },
];

const generateBreadcrumbItems = (category: string, title: string) => [
    { label: 'Home', href: '/' },
    { label: category, href: `/category/${category}` },
    { label: title, href: `/table/${title.replace(/\s+/g, '-').toLowerCase()}` }
];

const createNewUserMessage = (value: string, index: number): Message => ({
    userInfo: aiTestUserInfo,
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

export default TableDetail;
