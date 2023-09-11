import React from "react";
import "./css/Shipping.css";

export default function Shipping() {
  return (
    <>
      <br />
      <hr />

      <div className="shipping-black-background">
        <div className="step-two"> Step 2 of 3: Shipping</div>
      </div>

      <div className="shipping-container">
        <span>* indicates a required field</span>
        <h5 style={{ textDecoration: "none", marginTop: "10px", marginBottom: "0px" }}>
          Shipping
          <hr />
        </h5>

        <form className="shipping-form-container">
          <label>
            Name:
            <input
              type="text"
              className="shipping-input"
              placeholder="First Name*"
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              className="shipping-input"
              placeholder="Last Name*"
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              className="shipping-input"
              placeholder="Address*"
            />
          </label>

          <label>
            City:
            <input type="text" className="shipping-input" placeholder="City*" />
            <span className="available-countries">Available Counties:</span>
            <select className="selectCounty">
              <option value="unitedStates">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="france">France</option>
              <option value="united-kingdom">United Kingdom</option>
            </select>
          </label>

          <button type="button">Continue To Payment</button>
        </form>
      </div>
    </>
  );
}
