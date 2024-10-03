// dataDropdown.js

"use client";

import React, { useState } from 'react';
import { categories } from '../data';

const DataDropdown = ({ onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Veri Seçimi</h1>
            <select
                onChange={handleCategoryChange}
                value={selectedCategory}
                className="mb-5 block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Bir kategori seçin</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default DataDropdown;
