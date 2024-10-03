import dotenv from 'dotenv';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        OPENAI_API_ENDPOINT: process.env.OPENAI_API_ENDPOINT,
    },
};

dotenv.config();

export default nextConfig;
