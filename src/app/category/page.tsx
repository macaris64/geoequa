"use client";

import DataDropdown from "@/app/components/dataDropdown";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleCategorySelect = (category: string) => {
        router.push(`/category/${decodeURIComponent(category)}`);
    };

    return (
        <div>
            <DataDropdown onCategorySelect={handleCategorySelect} selectedCategory=''/>
        </div>
    )
}
