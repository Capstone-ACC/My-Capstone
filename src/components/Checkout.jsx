import React from "react";
import "./css/Cart-Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate();

  function goToStepTwo() {
    navigate("/shipping")
  }


  return (
    <>
      <br />
      <hr />

      <div className="black-background">
        <div className="step-one"> Step 1 of 3: Contact</div>
      </div>

      <div className="checkout-container">
        <span>* indicates a required field</span>
        <h5 className="contactInfo">
          Contact Information
          <hr />
        </h5>

        <img src="/images/contact.jpg" className="contact"/>

        <form className="form-container">
          <label>
            Phone Number:
            <input
              type="text"
              className="checkout-input"
              placeholder="Cell Phone*"
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              className="checkout-input"
              placeholder="Best Email*"
            />
          </label>

          <div className="my-checkboxes">
            <label className="opt-in-text">
              <input type="checkbox" />
              Opt in for text notifications of your purchased order
              <input type="checkbox" />
              Sign up for weekly coupons from Tech & Styles
            </label>

            <button
             type="button"
             onClick={goToStepTwo}>
             Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
