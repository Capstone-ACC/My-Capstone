import React from "react";
import "./css/Shipping-Payment.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Shipping() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const myStoredUsername = localStorage.getItem("username");
    if (myStoredUsername) {
      setUsername(myStoredUsername);
    }
  }, []);

  //handle submit form
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  //useNavigate & useLocation
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state || {};

  function backToContact() {
    navigate("/checkout", {
      state: {
        cart: cart,
      },
    });
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

        <div className="shipping-form-container">
          <form onSubmit={handleSubmitForm}>
            <label>
              First Name:
              <input
                type="text"
                placeholder="First Name*"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                placeholder="Last Name*"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                placeholder="Address*"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label>
              City:
              <input
                type="text"
                placeholder="City*"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>

            <label>
              State:
              <input
                type="text"
                className="state"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />
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
      </div>
    </>
  );
}
