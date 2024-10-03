"use client";

import { useParams } from 'next/navigation';
import Table from "@/app/components/table";
import { allData } from "@/app/data";
import Breadcrumb from "@/app/components/breadcrumb";

export default function TableDetail(){
    const { tableName } = useParams();

    const tableData = allData.find(item =>
        item.title.replace(/\s+/g, '-').toLowerCase() === tableName
    );
    if (!tableData) {
        return <div>Table not found</div>;
    }

    const category = tableData.category;

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: category, href: `/category/${category}` },
        { label: tableData.title, href: `/table/${tableName}` }
    ];

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <Table
                title={tableData.title}
                description={tableData.description}
                columns={Object.keys(tableData.data[0])}
                data={tableData.data}
            />
        </>

    );
};
