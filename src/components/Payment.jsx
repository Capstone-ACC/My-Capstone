import React from "react";

export default function Payment() {
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

        <form className="shipping-form-container">
          <label>
            First and Last Name
            <input
              type="text"
              placeholder="Name on card*"
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              placeholder="Last Name*"
            />
          </label>

          <label>
            Credit Card Number:
            <input
              type="text"
              placeholder="Credit Card Number*"
            />
          </label>

          <label>
            Zip Code:
            <input
              type="text"
              placeholder="Zip Code*"
            />
          </label>

          <label>
            CVV:
            <input
              type="text"
              placeholder="CVC*"
            />
          </label>
        </form>
      </div>
    </>
  );
}
