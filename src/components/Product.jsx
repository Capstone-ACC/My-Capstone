import React from "react";
import { Link } from "react-router-dom";
import "./css/Main-SearchBar.css";

export default function Product({ product }) {
  return (
    <section className="my-box" key={product.id}>
      <section className="content">
        <h4>{product.title} </h4>
        <span>Description: {product.description}</span>
        <span>Category: {product.category} </span>
        <span>ID: {product.id}</span>
        <span>Price: ${product.price} </span>
        <img src={product.image} className="productImages" alt="Image of Product" />

        <section className="my-buttons">
          <button>
            <Link to={`/products/${product.id}`} className="see-details-link">
              See details
            </Link>
          </button>
        </section>
      </section>
    </section>
  );
}
