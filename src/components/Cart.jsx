import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { getAllCarts } from "./api"
import { CartContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"
import "./Cart.css";
// import { loadCart } from '../Context/CartUtils'

export default function Cart() {
  const [allCart, setAllCart] = useState({})
  const myCart = useContext(CartContext)
  const { state, dispatch } = myCart

  //get all carts
  //question ? ? ?
  //do i even need this useEffect?, am I doing the cart wrong?
  //am i supposed to do what the API says whats is in the users cart?
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
          item.quantity = 1
          return (
            <div className="myItems" key={index}>
              <img src={item.image} className="cartImg" />
              <span>{item.title}</span>
              <span>${item.price}</span>

              <button 
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
                className="cart-buttons">
                +
              </button>
              <span>{item.quantity}</span>
              <button className="cart-buttons">-</button>

              <button 
                onClick={() => dispatch({ type: "DELETE", payload: item })}
                className="cart-delete">
                Delete
              </button>
              <hr />
            </div>
          )
        })}

        <button className="cartBackToProducts" onClick={goBackToProducts}>
          Add More
        </button>

        <button>
          <Link to="/checkout">Check Out</Link>
        </button>
      </div>
    </>
  )
}
