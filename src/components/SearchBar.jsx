import React from "react"
import { useState } from "react"
import "./Main-SearchBar.css"

export default function SearchBar({ value, onChange }) {
  const [inputSearch, setInputSearch] = useState(value);

  const handelSearchInput = (event) => {
    const inputValue = event.target.value;
    setInputSearch(inputValue);
    onChange(inputValue);
  }
  
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for item"
          value={inputSearch}
          onChange={handelSearchInput}
        />
      </div>
    </>
  )
}
