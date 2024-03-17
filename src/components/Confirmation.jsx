import React, { useContext } from 'react';
import { CartContext } from '../Context/cart';
import { useLocation, useNavigate } from "react-router-dom";
import "./css/Confirmation.css";

export default function Confirmation() {
  const { clearCart } = useContext(CartContext);
  const location = useLocation();
  const { name, email, address, cart, } = location.state;

  //useNavigate
  const navigate = useNavigate();

  function backToShopping() {
    clearCart();
    alert("Thanks for shopping with Tech & Styles!")
    navigate('/main-all-products')
  }

  return (
    <>
      <div className="confirmation-black-background">
        <div className="step-four"> Confirmation #2556987125</div>
        <img src="/images/animatedCreditCard.png" className="animatedCC" alt="icon of maroon credit card" />
      </div>

      <section className="confirmation-container">
        <h5 className="heading-confirm">
          Payment Successful {name}!
          <hr />
        </h5>
        <span>Thank you for your order!</span><br/>
        <span>
          Be on a look out for an E-mail sent to
          <div className="email">{email}</div> for more details
        </span>
        <span>
          Items are being sent to <div className="address">{address}</div>
        </span>
    
        {console.log("Items Purchased:", cart)}
        {console.log(`"Payment Successful:" Shipping To ${address}`)}

        <button onClick={backToShopping}>Continue Shopping</button>
      </section>
    </>
  );
}


