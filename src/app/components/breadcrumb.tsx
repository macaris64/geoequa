"use client";

import Link from 'next/link';

interface BreadcrumbProps {
    items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="text-blue-600">
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                        {index < items.length - 1 && <span className="mx-1">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
