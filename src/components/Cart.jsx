import { useState, useEffect, useContext } from 'react'
import {  getAllCarts } from './api'
import './Cart.css'
import { CartContext } from '../Context/Context'

export default function Cart() {
  const [allCart, setAllCart] = useState({})

  const myCart = useContext(CartContext)
  const state = myCart.state;
  const dispatch = state.dispatch

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
        {state.map((item, index) => {
          return (
            <div className="myItems" key={index}>
              <img src={item.image} className="cartImg" />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button>-</button>
              <button>+</button>     
            </div>
          )
        })}
        <button className="cartBackToProducts">Back To Products</button>
     </div>
    </>
  )
}

