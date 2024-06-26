import "./css/Cart-Checkout.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout({}) {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart } = location.state || {};
  console.log("Cart Data:", cart);

  function goToStepTwo() {
    navigate("/shipping", {
      state: {
        cart: cart,
      },
    });  
  }

  function backToCart() {
    navigate("/cart", {
      state: {
        cart: cart,
      },
    });
  }

  return (
    <>
      <section className="black-background">
        <div className="step-one"> Step 1 of 3: Contact</div>
      </section>

      <main className="checkout-container">
        <span>* indicates a required field</span>
        <h5 className="contactInfo">
          Contact Information
          <hr />
        </h5>

        <img src="/images/contact.jpg" className="contact" alt="Cell Phone, Contact Information"/>

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

          <section className="my-checkboxes">
              <label className="opt-in-text">
                <input type="checkbox" className="opt" />
                Opt in for text notifications of your purchased order
                <input type="checkbox" className="opt" />
                Sign up for weekly coupons from Tech & Styles
              </label>
        
              <section style={{ marginTop:"20px"}}>
                <button type="button" onClick={backToCart}>
                  Back To Cart
                  <img src="/images/cart.png" alt="shopping cart" className="phone" />
                </button>
                <button type="button" onClick={goToStepTwo}>
                  Continue
                </button>
              </section>
  
          </section>
        </form>
      </main>
    </>
  );
}
