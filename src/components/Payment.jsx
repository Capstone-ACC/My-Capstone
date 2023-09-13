import React from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  //useNavigate
  const navigate = useNavigate();

  function backToShipping() {
    navigate("/shipping");
  }

  function goToConfirmation() {
    navigate("/confirmation");
  }

  return (
    <>
      <br />
      <hr />

      <div className="payment-black-background">
        <div className="step-three"> Step 3 of 3: Payment</div>
      </div>

      <div className="payment-container">
        <span>* indicates a required field</span>
        <h5
          style={{
            textDecoration: "none",
            marginTop: "10px",
            marginBottom: "0px",
          }}
        >
          Payment
          <hr />
        </h5>

        <img src="/images/creditCards.jpg" className="creditCards" />

        <form className="payment-form-container">
          <label className="payment-labels-input" >
            First and Last Name
            <input type="text" placeholder="Name on card*" />
          </label>

          <label className="payment-labels-input">
            Credit Card Number:
            <input type="input" placeholder="Credit Card Number*" />
          </label>

          <label className="payment-labels-input">
            Zip Code:
            <input type="text" placeholder="Zip Code*" />
          </label>

          <label className="payment-labels-input">
            CVV:
            <input type="text" placeholder="CVV*" />
          </label>

          <label className="payment-labels-input">
            Promo Code:
            <input type="text" placeholder="Code" />
          </label>

          <div className="payment-buttons">
            <button onClick={backToShipping}>Back To Shipping</button>
            <button onClick={goToConfirmation}>Submit Payment</button>
          </div>
        </form>
      </div>
    </>
  );
}
