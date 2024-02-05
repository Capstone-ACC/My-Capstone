import { useState } from "react";
import "./css/Filter.css";

export default function PriceFilter({ onPriceChange }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  //min- max price
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const applyFilter = () => {
    if (minPrice === "" || maxPrice === "") {
      alert("Please enter both a minimum and maximum price");
      return;
    }

    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (min > max) {
      alert("Minimum price must be less then or equal to max price");
    }
    onPriceChange(min, max);
  };

  return (
    <div className="priceFilter-container">
      <label className="productPrice">Min Price:</label>
      <input
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="priceInput"
        placeholder="Enter Minimal Price"
      />

      <label className="productPrice">Max Price:</label>
      <input
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="priceInput"
        placeholder="Enter Maximum Price"
      />

      <button onClick={applyFilter}>Apply Price Filter</button>
    </div>
  );
}
