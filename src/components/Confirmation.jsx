import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/Confirmation.css";

export default function Confirmation() {
  const location = useLocation();
  const { name, email, address } = location.state;

  console.log(`"Success:" Shipping To ${address}`);

  return (
    <>
      <div className="confirmation-black-background">
        <div className="step-four"> Confirmation #2556987125</div>
        <img src="/images/animatedCreditCard.png" className="animatedCC"/>
      </div>

      <div className="confirmation-container">
        <h5 className="heading-confirm">
          Payment Successful {name}!
          <hr />
        </h5>

        <span>
          Your order is being processed
        </span><br/>

        <span>
          Be on a look out for an E-mail sent to
          <div className="email">{email}</div> for more details
        </span>

        <span>
          Items are being sent to <div className="address">{address}</div>{" "}
        </span>
      </div>
    </>
  );
}
