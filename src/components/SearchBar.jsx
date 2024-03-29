import { useState } from "react";
import "./css/Main-SearchBar.css";

export default function SearchBar({ value, onChange }) {
  const [inputSearch, setInputSearch] = useState(value);

  const handelSearchInput = (event) => {
    const inputValue = event.target.value;
    setInputSearch(inputValue);
    onChange(inputValue);
  };

  return (
    <>
      <section className="searchBar">
        <input
          type="text"
          placeholder="Search for item"
          value={inputSearch}
          onChange={handelSearchInput}
        />
      </section>
    </>
  );
}
