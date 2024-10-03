import TableData from "@/app/components/tableData";
import {useState} from "react";
import axios from "axios";

export default function Table({title, description, columns, data, isPreview = false}: { title: string, description: string, columns: string[], data: any[], isPreview?: boolean }) {
    const [aiResponse, setAiResponse] = useState('');
    const [messages, setMessages] = useState(
        [
            {
                role: 'system',
                content: 'You are a helpful assistant.'
            }
        ]
    );

    const analyzeWithAI = async () => {
        const chatEndpoint: string = process.env.OPENAI_API_ENDPOINT || '';

        const userMessage = `Analyze the following data: ${JSON.stringify(data)}`;
        setMessages(prevMessages => [...prevMessages, { role: 'user', content: userMessage }]);

        try {
            const response = await axios.post(chatEndpoint, {
                messages: [...messages, { role: 'user', content: userMessage }],
                max_completion_tokens: 4096,
                model: 'gpt-4o-mini'
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            const assistantResponse = response.data.choices[0].message.content;
            setAiResponse(assistantResponse);
            setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: assistantResponse }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            console.error('Endpoint:', chatEndpoint);
            console.error(`API Key: Bearer ${process.env.OPENAI_API_KEY}`)
            setAiResponse("An error occurred while analyzing data.");
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption
                    className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    {title}
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {columns.map((column: string, index: number) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {column}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <TableData columns={columns} data={data}/>
                </tbody>
            </table>
            {isPreview && (
                <div
                    className='grid px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
                    <div>
                        <button
                            onClick={analyzeWithAI}
                            className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">
                            Explore
                        </button>
                    </div>
                </div>
            )}
            {aiResponse && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <h2 className="font-semibold">AI Response:</h2>
                    <p>{aiResponse}</p>
                </div>
            )}
        </div>
    )
}
