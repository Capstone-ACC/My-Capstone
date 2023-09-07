import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"
import { getAllCarts } from "./api"
// import { loadCart } from '../Context/CartUtils'
import "./Cart.css"

export default function Cart() {
  const [allCart, setAllCart] = useState({})
  const myCart = useContext(CartContext)
  const { state, dispatch } = myCart

  // get all carts
  // question ? ? ?
  // do i even need this useEffect?, am I doing the cart wrong?
  // am i supposed to do what the API says whats is in the users cart?
  useEffect(() => {
    const fetchAllCart = async () => {
      try {
        const myCart = await getAllCarts();
        setAllCart(myCart);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchAllCart()
  }, [])

  //use navigate
  const navigate = useNavigate();

  function goBackToProducts() {
    navigate("/main-all-products");
  }

  return (
    <>
      <br />
      <hr />

      <div className="cart-container">
        <h5>My Cart</h5>
        
        {state.map((item, index) => {
          return (
            <div className="myItems" key={index}>
              <img src={item.image} className="cartImg" />
              <span>{item.title}</span>
              <span>${item.price}</span>

              <button
                onClick={() => {
                  console.log("Decreased Quantity:", item);
                  dispatch({ type: "DECREASE", payload: item });
               }}
               className="cart-buttons">
               -
             </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  console.log("Increased Quantity:", item);
                  dispatch({ type: "INCREASE", payload: item });
               }}
               className="cart-buttons">
               +
             </button>

              <button
                onClick={() => {
                  console.log("Deleted Item:", item);
                  dispatch({ type: "DELETE", payload: item });
               }}>
               Delete
             </button>
            
              <hr />
            </div>
          )
        })}

        <button className="cartBackToProducts" onClick={goBackToProducts}>
          Add More Items
        </button>

        <button>
          <Link to="/checkout">Check Out</Link>
        </button>
      </div>
    </>
  )
}


