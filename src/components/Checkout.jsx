import React from "react";
import "./Cart-Checkout.css";

export default function Checkout() {

  const handleRadioButton = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <br />
      <hr />

      <div className="black-background">
       <div className="step-one"> Step 1 of 3: Shipping</div>
      </div>
      
      <div className="checkout-container">
        <span>* indicates a required field</span>
        <h5 className="contactInfo">Contact Information<hr/></h5>
        <form>
          <label>
             Phone Number:
             <input 
             type="text" 
             className="checkout-input" 
             placeholder="Cell Phone*" />
          </label>

          <label>
             Email:
             <input 
             type="text" 
             className="checkout-input" 
             placeholder="Best Email*" />
          </label>

         <div className="my-checkboxes">
            <label className="opt-in-text">
              <input 
              type="checkbox" />
              Opt in for text notifications of your purchased order
  
              <input 
              type="checkbox" />
              Opt in for text notifications of your purchased order
            </label>
         </div>
        </form>

        <h6 className="delivery">Delivery Method<hr/></h6>

          <div className="deliveryMethod">
            <label>
              <input type="radio"
              value="ship to home address"
              onChange={handleRadioButton} />
              Ship To Home Address
            </label>

            <label>
              <input type="radio" />
              Ship and Pick Up From Tech & Styles
            </label>
          </div>
        </div>
    </>
  );
}


