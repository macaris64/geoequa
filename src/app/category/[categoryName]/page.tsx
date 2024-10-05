"use client";

import { useParams, useRouter } from 'next/navigation';
import Table from "@/app/components/table";
import { allData, categoryDescriptions } from "@/app/data";
import CategoryHeader from "@/app/components/categoryHeader";
import DataDropdown from "@/app/components/dataDropdown";
import Breadcrumb from "@/app/components/breadcrumb";
import { Key } from 'react';

export default function CategoryPage() {
    const {categoryName} = useParams();
    const router = useRouter();
    const decodedCategoryName = decodeURIComponent(categoryName.toString());

    const filteredData = getFilteredData(decodedCategoryName);

    const breadcrumbItems = createBreadcrumbItems(categoryName);

    return (
        <div>
            <Breadcrumb items={breadcrumbItems}/>
            <DataDropdown onCategorySelect={handleCategorySelect} selectedCategory={decodedCategoryName}/>
            <CategoryHeader
                title={decodedCategoryName}
                description={categoryDescriptions[decodedCategoryName] || 'No description available.'}
            />
            <RenderTables filteredData={filteredData}/>
        </div>
    );

    // Helper Functions
    function handleCategorySelect(category: string) {
        router.push(`/category/${decodeURIComponent(category)}`);
    }

    function getFilteredData(category: string) {
        return allData.filter(item => item.category === category);
    }

    function createBreadcrumbItems(category: string | string[]) {
        return [
            {label: 'Home', href: '/'},
            {label: decodeURIComponent(category as string), href: `/category/${category}`}
        ];
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function RenderTables({filteredData}) {
        if (filteredData.length === 0) {
            return <div>No tables available for this category.</div>;
        }

        return filteredData.map((item: { title: string; description: string; data: any[]; }, index: Key | null | undefined) => (
            <Table
                key={index}
                title={item.title}
                description={item.description}
                columns={Object.keys(item.data[0])}
                data={item.data}
                isPreview={true}
            />
        ));
    }
}
