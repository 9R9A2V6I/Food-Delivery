import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newContainer">
        <h1 className="newSletter">SUBSCRIBE FOR OUR NEWSLETTER </h1>
        <div className="footerBox">
          <div className="footerEmailBox">
            <input
              className="footerEmailInput"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="footerEmailBtn">
            <h1>Submit</h1>
          </div>
        </div>
        <hr className="footerHr" />
      </div>
      
    </>
  );
};

export default Newsletter;
