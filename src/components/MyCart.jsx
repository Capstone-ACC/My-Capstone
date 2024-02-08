import React, { useContext } from 'react';
import { CartContext } from '../Context/cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, decreaseItem, deleteItem, clearCart, getCartTotal, addToCart } = useContext(CartContext);

  const navigate= useNavigate();

  const keepShopping = () => {
    navigate("/main-all-products");
  }

  const checkOut = () => {
    navigate('/checkout', {
      state: {
        cart: cartItems,
      }
    })
  }

  return (
    <section className="cart-container">
    <h3>My Cart</h3>
      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
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
              <button onClick={keepShopping}>Add More</button>
              <button onClick={clearCart} >Clear Cart</button>
              <button onClick={checkOut}>Check Out</button>
            </section>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;