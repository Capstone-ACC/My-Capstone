import { useEffect, useContext } from "react";
import { CartContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { saveCartToLocalStorage,getCartFromLocalStorage,} from "../Context/CartUtils";
import "./css/Cart-Checkout.css";

export default function Cart() {
  const myCart = useContext(CartContext);
  const { state, dispatch } = myCart;

  useEffect(() => {
    const cartData = getCartFromLocalStorage();
    if (cartData > 0) {
      dispatch({ type: "LOAD_CART", payload: cartData });
    }
  }, [dispatch]);

  //total price
  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

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
        <h5>My Cart</h5>

        {state.length === 0 ? (
          <>
          <span style={{ fontSize: "22pt" }}>Cart is empty for now</span><br/>
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
                    className="cart-buttons"
                  >
                    Delete
                  </button>

                  <hr />
                </div>
              );
            })}

            <span className="total-price">Total: ${totalPrice.toFixed(2)}</span>

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