"use client";

import Link from 'next/link';

import Breadcrumb from "@/app/components/breadcrumb";
import { countryData } from "@/app/data";

export default function CountryData() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Country Data', href: '/country' },
    ];
    return (
        <>
            <Breadcrumb items={breadcrumbItems}/>
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-4">{'Country Data'}</h1>
                {countryData.map((data, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
                        <Link href={`/country/${decodeURIComponent(data.title)}`}>
                            <h2 className="text-2xl font-semibold cursor-pointer">{data.title}</h2>
                        </Link>
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{data.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
