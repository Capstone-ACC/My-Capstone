import { useEffect, useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { saveCartToLocalStorage,getCartFromLocalStorage,} from "../Context/CartUtils";
import "./css/Cart-Checkout.css";

export default function Cart() {
  const [totalCartPrice, setTotalPrice] = useState(0);
  // const [username, setUsername] = useState("");

  const myCart = useContext(CartContext);
  const { state, dispatch } = myCart;

  //local storage
  useEffect(() => {
    const cartData = getCartFromLocalStorage();
    if (cartData) {
      dispatch({ type: "LOAD_CART", payload: cartData });
    }
  }, [dispatch]);

  useEffect(() => {
    saveCartToLocalStorage(state);
  }, [state]);


  //total price
  useEffect(() => {
    const totalPrice = state.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [state]);

  //use navigate
  const navigate = useNavigate();

  function goToProducts() {
    navigate("/main-all-products");
  }

  function goToCheckOut() {
    navigate("/checkout", {
      state: { cart: state } });
  }

  return (
    <>
      <br />
      <hr />

      <div className="cart-container">
        <h5>Donation Cart</h5>
        <span>Purchase Items For Your Local Donation Center</span><br/><br/>

        {state.length === 0 ? (
          <>
          <span style={{ fontSize: "22pt" }}>Cart is empty for now</span><br/>
          <span className="total-price">Total: $0.00</span>
          <button onClick={goToProducts}> Add Items</button>
          </>
        ) : (
          <>
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

                 <div className="cart-buttons">
                 <button
                    onClick={() => {
                      console.log("Added To Cart:", item);
                      dispatch({ type: "ADD", payload: item });
                      saveCartToLocalStorage([...state, {...item, quantity: 1}]);
                    }}
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
                 </div>

                  <hr />
                </div>
              );
            })}

            <span className="total-price">Total: ${totalCartPrice.toFixed(2)}</span>

            <div className="add-more-bts-and-checkout">
              <button className="cartBackToProducts" onClick={goToProducts}>
                Add More Items
              </button>

              <button onClick={goToCheckOut}>Check Out</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}