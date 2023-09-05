import React from 'react'
import { useState, useEffect } from 'react';
import { addCart } from './api';

export default function AddToCart() {
    const [cart, setCart] = useState({})

  //add cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const myCart = await addCart();
        setCart(myCart)

      } catch (error) {
          console.error("Error:", error)
      }
    }

    fetchCart()
  }, [])


  return (
    <div>
        Add Cart
     </div>
  )
}
