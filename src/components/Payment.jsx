import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cvv, setCvv] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  //useNavigate & useLocation
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state || {};

  function backToShipping() {
    navigate("/shipping", {
      state: {
        cart: cart,
      },
    });
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
        email,
        cart,
      },
    });
  }

  return (
    <>
      <br />
      <hr />

      <div className="payment-black-background">
        <div className="step-three"> Step 3 of 3: Payment</div>
      </div>

      <section className="payment-container">
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

        <img src="/images/creditCards.jpg" className="creditCards" alt="Credit cards in jeans" />

        <form className="payment-form-container" onSubmit={goToConfirmation}>
          <label>
            First and Last Name
            <input
              type="text"
              placeholder="Name on card*"
              className="payment-labels-input"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Confirm Address:
            <input
              type="text"
              placeholder="Address*"
              className="payment-labels-input"
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label>
            Confirm Email:
            <input
              type="text"
              placeholder="Email*"
              className="payment-labels-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Credit Card Number:
            <input
              type="input"
              placeholder="Credit Card Number*"
              className="payment-labels-input"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>

          <label>
            Zip:
            <input
              type="text"
              placeholder="Zip Code*"
              className="payment-labels-input"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>

          <label>
            CVV:
            <input
              type="text"
              placeholder="CVV*"
              className="payment-labels-input"
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>

          <label>
            Promo Code:
            <input
              type="text"
              placeholder="Code"
              className="payment-labels-input"
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </label>

          <div className="payment-buttons">
            <button type="button" onClick={backToShipping}>Back To Shipping</button>
            <button type="submit">Submit Payment</button>
          </div>
        </form>
      </section>
    </>
  );
}
