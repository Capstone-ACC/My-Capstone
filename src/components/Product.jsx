import React from "react";
import { Link } from "react-router-dom";
import "./css/Main-SearchBar.css";

export default function Product({ product }) {
  return (
    <div className="my-box" key={product.id}>
      <div className="content">
        <h4>{product.title} </h4>
        <span>Description: {product.description}</span>
        <span>Category: {product.category} </span>
        <span>ID: {product.id}</span>
        <span>Price: ${product.price} </span>
        <img src={product.image} className="productImages" />

        <div className="my-buttons">
          <button>
            <Link to={`/products/${product.id}`} className="see-details-link">
              See details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
