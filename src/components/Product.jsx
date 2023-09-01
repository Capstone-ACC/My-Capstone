import React from 'react'
import './Main-SearchBar.css'
import { Link } from 'react-router-dom'

export default function Product( {product}) {
    return (
        <div className = "my-box" key={product.id}>
          <div className="content" >
            <h4>{product.title} </h4>
            <span>Description: {product.description}</span>
            <span>Category: {product.category} </span>
            <span>ID: {product.id}</span>
            <span>Price: {product.price} </span>
            <img src={product.image} className="productImages"/>
            
            <div className="my-buttons">
                <button><Link to={`/products/${product.id}`} className="see-details-link">See details</Link></button>
                <button type="button" className="add-to-cart"><Link to="/cart">Add To Cart</Link></button>
            </div>
           </div>
        </div>
    )
}
