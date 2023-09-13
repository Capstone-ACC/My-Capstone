import React from "react";
import "./css/Confirmation.css";

export default function Confirmation({email}) {
  return (
    <>
      <div className="confirmation-black-background">
        <div className="step-four"> Confirmation #2556987125</div>
      </div>

      <div className="confirmation-container">
        <h5 className="heading-confirm">Payment Success!<hr /></h5>
        <span>Payment has been submitted and your order is being processed.</span>
        <span>Be on a look out for an E-mail for more details</span>
      </div>
    </>
  );
}
