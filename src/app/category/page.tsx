"use client";

import DataDropdown from "@/app/components/dataDropdown";
import { useRouter } from 'next/navigation';
import Breadcrumb from "@/app/components/breadcrumb";

export default function Home() {
    const router = useRouter();
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Category Data', href: '/category' },
    ];

    const handleCategorySelect = (category: string) => {
        router.push(`/category/${decodeURIComponent(category)}`);
    };

    return (
        <div>
            <Breadcrumb items={breadcrumbItems}/>
            <DataDropdown onCategorySelect={handleCategorySelect} selectedCategory=''/>
        </div>
    )
}
