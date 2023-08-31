import React, { useEffect } from 'react';
import { getCategories } from './api';

export default function DropDown({ selectedCategory, setSelectedCategory }) {

    useEffect(() => {    //do i even need this ?
        const fetchCategories = async () => {
            try {
                const ourCategories = await getCategories();
                setSelectedCategory(ourCategories);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCategories();
    }, [setSelectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select One</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="mensClothing">Men's Clothing</option>
            <option value="womensClothing">Women's Clothing</option>
        </select>
    )
}

