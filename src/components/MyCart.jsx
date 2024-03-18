import React, { useContext } from 'react';
import { CartContext } from '../Context/cart';
import { useNavigate, Link } from 'react-router-dom';
import Toast from './Toast';

const Cart = () => {
  const { cartItems, decreaseItem, deleteItem, clearCart, getCartTotal, addToCart, loggedInUser } = useContext(CartContext);

  const navigate= useNavigate();

  const keepShopping = () => {
    navigate("/main-all-products");
  }

  const checkOut = () => {
    if (loggedInUser) {
      navigate("/checkout", {
        state: {
          cart: cartItems,
        }
      })
    } else {
      alert("Please Log in to check out")
      navigate('/login');
    }
  }

  return (
    <section className="cart-container">
    <h3>My Cart</h3>
      {cartItems.length === 0 ? (
        <>
        <span style={{fontSize: '18pt'}}>Your cart is empty</span>
        <Link to="/main-all-products" style={{marginTop: '10px', fontSize: '16pt'}}>Lets Get Shopping</Link>
       </>
      ) : (
        <div className="more-styles">
          {cartItems.map((item) => (
            <div key={item.id} className="myItems">
              <span>{item.title}</span>
              <img src={item.image} className="cartImg"/>
   
              <div className="cart-details">
                <button onClick={() => decreaseItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
           
                <span style={{padding: "10px"}}>${(item.quantity * item.price).toFixed(2)}</span>
                <button onClick={() => deleteItem(item)}>Delete Item</button>
                <hr/>
              </div>
            </div>
          ))}
          <div className="total-checkout-keepShopping">
            <span style={{fontSize: '18pt'}}>Grand Total: ${getCartTotal()}</span>

            <section>
              <button type="button" onClick={keepShopping}>Add More</button>
              <button type="button" onClick={clearCart} >Clear Cart</button>
              <button type="button" onClick={checkOut}>Check Out</button>
            </section>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;