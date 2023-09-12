import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";

export default function Home() {
  const navigate = useNavigate();

  function goToAllProducts() {
    navigate("/main-all-products");
  }

  return (
    <div className="image-container">
      <img src="/images/homeImage.jpg" className="homePic" />
      <button className="shopAll" onClick={goToAllProducts}>
        Shop All
      </button>
      <p>Check out latest trends from clothing to technology</p>
    </div>
  );
}
