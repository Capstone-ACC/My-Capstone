import React from 'react'

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
            <h5 style={{ textDecoration: "none", marginTop: "10px", marginBottom: "0px" }}>
              Payment
              <hr />
            </h5>
    
            <form className="shipping-form-container">
              <label>
                First and Last Name
                <input
                  type="text"
                  className="shipping-input"
                  placeholder="Name on card*"
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
                Credit Card Number:
                <input
                  type="text"
                  className="shipping-input"
                  placeholder="Credit Card Number*"
                />
              </label>
            </form>
          </div>
        </>
      );
    }
    