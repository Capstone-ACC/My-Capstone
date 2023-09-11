import React, { useState, useEffect } from 'react';
import { addCart, deleteCart, singleCart } from './api';

export default function AddCart() {
  const [cart, setCart] = useState([]);
  const [singleCart, setSingleCart] = useState([])
  const [deletedCart, setDeletedCart] = useState({});

  // Add cart
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

  //single cart
    //do i need the cart of the user {id}
  useEffect(() => {
    const fetchSingleCart = async (id) => {
      try {
        const mySingleCart = await singleCart(id)
        console.log("Single Cart", singleCart)
        setSingleCart(mySingleCart)

      } catch (error) {
        console.error("Error", error)
      }
    };
    fetchSingleCart();
  }, [])

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

