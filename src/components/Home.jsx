import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";

export default function Home() {
  const navigate = useNavigate();

  function goToAllProducts() {
    navigate("/main-all-products");
  }

  return (
    <main className="image-container">
      <img src="/images/homeImage.jpg" className="homePic" alt="Girls Shopping for Clothes" />
      <button className="shopAll" onClick={goToAllProducts}>
        Shop All
      </button>
      <p>Check out latest trends from clothing to technology</p>
    </main>
  );
}
