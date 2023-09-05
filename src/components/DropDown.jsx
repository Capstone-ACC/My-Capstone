import React, { useState, useEffect } from 'react'
import { getCategories } from './api'

export default function DropDown({ selectedCategory, setSelectedCategory }) {
    const [categories, setCategories] = useState([]) 

    useEffect(() => {  
        const fetchCategories = async () => {
            try {
                const ourCategories = await getCategories()
                setCategories(ourCategories)

            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCategories();
    }, [setSelectedCategory])

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    return (
        <select value={selectedCategory} onChange={handleCategoryChange}>
            <option
              value="">Select One
              </option>

            {categories.map((category ) => 
                <option 
                  value={category} 
                  key={category}>{category}</option>
            )}
        </select>
    )
}