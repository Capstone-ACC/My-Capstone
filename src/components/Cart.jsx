import { useState, useEffect } from 'react'
import {  getAllCarts } from './api'
import './Cart.css'

export default function Cart({ cartItems }) {
  const [allCart, setAllCart] = useState({})

  //get all carts
  useEffect(() => {
    const fetchAllCart = async() => {
      try {
        const myCart = await getAllCarts();
        setAllCart(myCart)

      } catch(error) {
        console.error("Error:", error)
      }
    }

    fetchAllCart();
  },[])

  return (
    <>
     <br/>
     <hr />

     <h5>My Cart</h5>
     <div className="cart-container"> 
       

     </div>
    </>
  )
}

