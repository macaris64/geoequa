"use client";

import DataDropdown from "@/app/components/dataDropdown";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleCategorySelect = (category: string) => {
        router.push(`/category/${decodeURIComponent(category)}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-5">
            <div className="w-full max-w-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction Video</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6i-sOfteM4s?si=R7ya1j_4p3u5zXrs"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to GeoEqua</h1>
            <p className="text-lg text-center mb-8">
                Explore the connections between Gender Inequality and Climate Change through our interactive data
                tables.
            </p>
            <DataDropdown onCategorySelect={handleCategorySelect} selectedCategory='' />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Access comprehensive data on gender inequality.</li>
                    <li>Analyze climate change metrics in relation to gender issues.</li>
                    <li>Interactive charts and insights for better understanding.</li>
                </ul>
            </div>
            <div className="mt-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Related Resources</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            United Nations Sustainable Development Goals
                        </a>
                    </li>
                    <li>
                        <a href="https://www.unwomen.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            UN Women
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Intergovernmental Panel on Climate Change (IPCC)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.worldbank.org/en/topic/gender" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            World Bank - Gender Equality
                        </a>
                    </li>
                    <li>
                        <a href="https://unfccc.int/gender/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Introduction to Gender and Climate Change (UNFCCC)
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
