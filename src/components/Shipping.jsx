import React from "react";
import "./css/Shipping-Payment.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Shipping() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const myStoredUsername = localStorage.getItem("username");
    if (myStoredUsername) {
      setUsername(myStoredUsername);
    }
  }, []);

  //useNavigate and location
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state;

  function backToContact() {
    navigate("/checkout");
  }

  function goToPayment() {
    navigate("/payment", {
      state: {
        cart: cart,
      },
    });
  }

  return (
    <>
      <br />
      <hr />

      <div className="shipping-black-background">
        <div className="step-two"> Step 2 of 3: Shipping</div>
      </div>

      <div className="shipping-container">
        <span>* indicates a required field</span>
        <h5
          style={{
            textDecoration: "none",
            marginTop: "10px",
            marginBottom: "0px",
          }}
        >
          Shipping
          <hr />
        </h5>

        <img src="/images/packages.jpg" className="packages" />

        <form className="shipping-form-container">
          <label>
            First Name:
            <input type="text" placeholder="First Name*" />
          </label>

          <label>
            Last Name:
            <input type="text" placeholder="Last Name*" />
          </label>

          <label>
            Address:
            <input type="text" placeholder="Address*" />
          </label>

          <label>
            City:
            <input type="text" placeholder="City*" />
          </label>

          <label>
            State:
            <input type="text" className="state" placeholder="State" />
            <span className="available-countries">Available Counties:*</span>
            <select className="selectCounty">
              <option value="unitedStates">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="france">France</option>
              <option value="united-kingdom">United Kingdom</option>
            </select>
          </label>

          <div className="shipping-buttons">
            <button type="button" onClick={backToContact}>
              Back To Contact Info
            </button>
            <button type="button" onClick={goToPayment}>
              Continue To Payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
