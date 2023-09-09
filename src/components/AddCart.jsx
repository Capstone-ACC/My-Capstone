import React, { useState, useEffect } from 'react';
import { addCart, deleteCart } from './api';

export default function AddCart() {
  const [cart, setCart] = useState([]);
  const [deletedCart, setDeletedCart] = useState({});

  // Add cart
  //do i need the cart of the user {id}
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const myCart = await addCart(); 
        console.log("Cart Data:", myCart);
        setCart(myCart) || [];

      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCart();
  }, []);

  // Delete cart
  const handleDeleteCart = async () => {
    try {
      const myDeletedItem = await deleteCart();
      console.log("Deleted Product:", myDeletedItem);

    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="second-cart-container">
      <h6>My Cart</h6>
{/* 
      {cart.map((cartItem, index) => {
        return (
          <div className="myCartItems" key={index}>
            <img src={cartItem.image} alt={cartItem.title} />
            <span>{cartItem.title}</span>
            <span>{cartItem.price}</span>
          </div>
        )
      })} */}

      <button onClick={handleDeleteCart}>Delete Cart</button>
    </div>
  )
}

