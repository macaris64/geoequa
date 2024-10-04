import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const { messages } = await req.json();

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
        });

        const responseMessage = completion.choices[0]?.message?.content;

        return NextResponse.json({ response: responseMessage });
    } catch (error) {
        console.error("OpenAI API error:", error);
        return NextResponse.json({ error: "Something went wrong with the OpenAI API." }, { status: 500 });
    }
}
