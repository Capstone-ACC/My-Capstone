import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cvv, setCvv] = useState("");
  const [promoCode, setPromoCode] = useState("")
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  //useNavigate
  const navigate = useNavigate();

  function backToShipping() {
    navigate("/shipping");
  }

  function goToConfirmation(event) {
    event.preventDefault();
    navigate("/confirmation", {
      state: {
        name,
        cardNumber,
        zipCode,
        cvv,
        promoCode,
        address,
        email
      }
    });
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

        <form className="payment-form-container" onSubmit={goToConfirmation}>
          <label className="payment-labels-input" >
            First and Last Name
            <input type="text" placeholder="Name on card*"
            onChange={(e) => setName(e.target.value)} />
          </label>

          <label className="payment-labels-input" >
            Confirm Address:
            <input type="text" placeholder="Address*"
            onChange={(e) => setAddress(e.target.value)} />
          </label>

          <label className="payment-labels-input" >
            Confirm Email:
            <input type="text" placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label className="payment-labels-input">
            Credit Card Number:
            <input type="input" placeholder="Credit Card Number*"
            onChange={(e) => setCardNumber(e.target.value)} />
          </label>

          <label className="payment-labels-input">
            Zip Code:
            <input type="text" placeholder="Zip Code*"
            onChange={(e) => setZipCode(e.target.value)} />
          </label>

          <label className="payment-labels-input">
            CVV:
            <input type="text" placeholder="CVV*"
            onChange={(e) => setCvv(e.target.value)} />
          </label>

          <label className="payment-labels-input">
            Promo Code:
            <input type="text" placeholder="Code"
            onChange={(e) => setPromoCode(e.target.value)} />
          </label>

          <div className="payment-buttons">
            <button onClick={backToShipping}>Back To Shipping</button>
            <button type="submit">Submit Payment</button>
          </div>
        </form>
      </div>
    </>
  );
}
