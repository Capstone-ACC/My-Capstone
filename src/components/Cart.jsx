import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { saveCartToLocalStorage, getCartFromLocalStorage} from '../Context/CartUtils'
import "./Cart.css";

export default function Cart() {
  const myCart = useContext(CartContext);
  const { state, dispatch } = myCart;

  useEffect(() => {
    const cartData = getCartFromLocalStorage()
    if (cartData.length > 0) {
      dispatch({type: "LOAD_CART", payload: cartData})
    }
  }, [dispatch])

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
                  saveCartToLocalStorage([...state]);
                }}
                className="cart-buttons"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  console.log("Increased Quantity:", item);
                  dispatch({ type: "INCREASE", payload: item });
                  saveCartToLocalStorage([...state]);
                }}
                className="cart-buttons"
              >
                +
              </button>

              <button
                onClick={() => {
                  console.log("Deleted Item:", item);
                  dispatch({ type: "DELETE", payload: item });
                  saveCartToLocalStorage([...state]);
                }}
              >
                Delete
              </button>

              <hr />
            </div>
          );
        })}

        <button className="cartBackToProducts" onClick={goBackToProducts}>
          Add More Items
        </button>

        <button>
          <Link to="/checkout">Check Out</Link>
        </button>
      </div>
    </>
  );
}
