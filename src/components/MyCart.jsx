// import { useEffect, useContext, useState } from "react";
// import { CartContext } from "../Context/Context";
// import { useNavigate } from "react-router-dom";
// import { saveCartToLocalStorage,getCartFromLocalStorage,} from "../Context/CartUtils";
// import "./css/Cart-Checkout.css";

// export default function Cart() {
//   const [username, setUsername] = useState("");
//   const [totalCartPrice, setTotalPrice] = useState(0);
//   const myCart = useContext(CartContext);
//   const { state, dispatch } = myCart;

//   //local storage
//   useEffect(() => {
//     const cartData = getCartFromLocalStorage();
//     if (cartData) {
//       dispatch({ type: "LOAD_CART", payload: cartData });
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     saveCartToLocalStorage(state);
//   }, [state]);


//   //total price
//   useEffect(() => {
//     const totalPrice = state.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//     setTotalPrice(totalPrice);
//   }, [state]);

//   //use navigate
//   const navigate = useNavigate();

//   function goToProducts() {
//     navigate("/main-all-products");
//   }

//   function goToCheckOut() {
//     navigate("/checkout", {
//       state: { cart: state } });
//   }

//   return (
//     <>
//       <br />
//       <hr />

//       <div className="cart-container">
//         <h5>Donation Cart</h5>
//         <span>Purchase Items For Your Local Donation Center</span><br/><br/>

//         {state.length === 0 ? (
//           <>
//           <span style={{ fontSize: "22pt" }}>Cart is empty for now</span><br/>
//           <span className="total-price">Total: $0.00</span>
//           <button onClick={goToProducts}> Add Items</button>
//           </>
//         ) : (
//           <>
//             {state.map((item, index) => {
//               return (
//                 <div className="myItems" key={index}>
//                   <img src={item.image} className="cartImg" />
//                   <span>{item.title}</span>
//                   <span>${item.price}</span>

//                   <button
//                     onClick={() => {
//                       console.log("Decreased Quantity:", item);
//                       dispatch({ type: "DECREASE", payload: item });
//                       saveCartToLocalStorage([...state]);
//                     }}
//                     className="cart-buttons"
//                   >
//                     -
//                   </button>

//                   <span>{item.quantity}</span>

//                  <div className="cart-buttons">
//                  <button
//                     onClick={() => {
//                       console.log("Added To Cart:", item);
//                       dispatch({ type: "ADD", payload: item });
//                       saveCartToLocalStorage([...state, {...item, quantity: 1}]);
//                     }}
//                   >
//                     +
//                   </button>

//                   <button
//                     onClick={() => {
//                       console.log("Deleted Item:", item);
//                       dispatch({ type: "DELETE", payload: item });
//                       saveCartToLocalStorage([...state]);
//                     }}
//                   >
//                     Delete
//                   </button>
//                  </div>

//                   <hr />
//                 </div>
//               );
//             })}

//             <span className="total-price">Total: ${totalCartPrice.toFixed(2)}</span>

//             <div className="add-more-bts-and-checkout">
//               <button className="cartBackToProducts" onClick={goToProducts}>
//                 Add More Items
//               </button>

//               <button onClick={goToCheckOut}>Check Out</button>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useContext } from 'react';
import { CartContext } from '../Context/cart';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal, addToCart } = useContext(CartContext);

  // const handleDecreaseQuantity = (item) => {
  //   if (item.quantity > 1) {
  //     removeFromCart(item);
  //   }
  // };

  // const handleIncreaseQuantity = (item) => {
  //   addToCart({ ...item, quantity: item.quantity + 1 });
  // };

  // const handleRemoveItem = (item) => {
  //    removeFromCart(item);
  // };

  return (
    <section className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        <div className="more-styles">
          {cartItems.map((item) => (
            <div key={item.id} className="myItems">
              <span>{item.title}</span>
              <img src={item.image} className="cartImg"/>
   
              <div className="cart-details">
                <button onClick={() => removeFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
           
                <span style={{padding: "10px"}}>${(item.quantity * item.price).toFixed(2)}</span>
                <button>Delete Item</button>
              </div>
            </div>
          ))}
          <div className="total-checkout-keepShopping">
            <span>Grand Total: ${getCartTotal()}</span>

            <section>
              <button>Keep Shopping</button>
              <button onClick={clearCart} >Clear Cart</button>
              <button>Check Out</button>
            </section>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;