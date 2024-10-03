"use client";

import { useParams, useRouter } from 'next/navigation';

import Table from "@/app/components/table";
import { allData, categoryDescriptions } from "@/app/data";
import CategoryHeader from "@/app/components/categoryHeader";
import DataDropdown from "@/app/components/dataDropdown";

export default function CategoryPage() {
    const { categoryName } = useParams();
    const router = useRouter();
    const decodedCategoryName = decodeURIComponent(categoryName.toString());
    const filteredData = allData.filter(item => item.category === decodedCategoryName);


    const handleCategorySelect = (category: string) => {
        router.push(`/category/${decodeURIComponent(category)}`);
    };

    return (
        <div>
            <DataDropdown onCategorySelect={handleCategorySelect} />
            <CategoryHeader
                title={decodedCategoryName.toString()}
                description={categoryDescriptions[decodedCategoryName.toString()]}
            />
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <Table
                            key={index}
                            title={item.title}
                            description={item.description}
                            columns={Object.keys(item.data[0])}
                            data={item.data}
                        />
                    ))
                ) : (
                    <div>No tables available for this category.</div>
                )}
            </div>
        </div>
    );
}
