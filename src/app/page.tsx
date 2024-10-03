"use client";
import {useState} from "react";

import DataDropdown from "@/app/components/dataDropdown";
import CategoryHeader from "@/app/components/categoryHeader";
import {allData, categoryDescriptions} from "@/app/data";

import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const router = useRouter();

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        router.push(`/category/${decodeURIComponent(category)}`);
    };

    const renderLinks = () => {
        const filteredData = allData.filter(item => item.category === selectedCategory);

        if (filteredData.length === 0) {
            return null;
        }

        return (
            <>
                <CategoryHeader
                    title={selectedCategory}
                    description={categoryDescriptions[selectedCategory]}
                />
                {filteredData.map((item, index) => (
                    <Link key={index} href={`/table/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                        <h2 className="text-lg font-bold cursor-pointer">{item.title}</h2>
                    </Link>
                ))}
            </>
        );
    };

    return (
        <div>
            <DataDropdown onCategorySelect={handleCategorySelect}/>
            <div>
                {renderLinks()}
            </div>
        </div>
    )
}
