import { useState, useEffect, useContext } from 'react'
import {  getAllCarts } from './api'
import { CartContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import { loadCart } from '../Context/CartUtils'

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

  //use navigate
  const navigate = useNavigate();

  function goBackToProducts() {
    navigate('/main-all-products')
  }

  return (
    <>
     <br/>
     <hr />

     <h5>My Cart</h5>
    
     <div className="cart-container"> 
        {state.map((item, index) => {
          item.quantity = 1
          return (
            <div className="myItems" key={index}>
              <img src={item.image} className="cartImg" />
              <span>{item.title}</span>
              <span>${item.price}</span>
      
              <button>+</button> 
              <span>{item.quantity}</span>
              <button>-</button>
            </div>
          )
        })}
        <button className="cartBackToProducts" onClick={goBackToProducts}>Back To Products</button>
     </div>
    </>
  )
}

