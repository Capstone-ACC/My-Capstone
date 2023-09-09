import React from "react";
import "./Cart-Checkout.css";

export default function Checkout() {
  return (
    <>
      <br />
      <hr />

      <div className="black-background">
       <div className="step-one"> Step 1 of 3: Shipping</div>
      </div>
      
      <div className="checkout-container">
        <span>* indicates a required field</span>
        <form>
          <label>
             Phone Number:
             <input type="text" className="checkout-input" placeholder="Cell Phone*" />
          </label>

          <label>
             Email:
             <input type="text" className="checkout-input" placeholder="Best Email*" />
          </label>
        </form>
      </div>
    </>
  );
}


