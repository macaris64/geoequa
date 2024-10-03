"use client";

import React from "react";
import Link from 'next/link';

interface BreadcrumbProps {
    items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-white p-5">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <Link href={item.href} className="hover:text-blue-300 transition-colors">
                            {item.label}
                        </Link>
                        {index < items.length - 1 && (
                            <span className="mx-1">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
