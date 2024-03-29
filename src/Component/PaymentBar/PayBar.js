import React from 'react';
import './PayBar.css';
import { useNavigate } from 'react-router-dom';

export default function PayBar() {
  const navigator = useNavigate();

  const successNavigator = () => {
    navigator('/successBar');
  };
  return (
    <>
      <div className="paybarContainer">
        <div class="credit-card-form">
          <h2>PAYMENT PORTAL</h2>
          <img
            class="Image1"
            src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
            alt="6375aad33dbabc9c424b5713-card-mockup-01"
            border="0"
          />

          <form>
            <div class="form-group">
              <label for="card-number">Card Number</label>
              <input type="text" id="card-number" placeholder="Card number" />
            </div>
            <div class="form-group">
              <label for="card-holder">Card Holder</label>
              <input
                type="text"
                id="card-holder"
                placeholder="Card holder's name"
              />
            </div>
            <div class="form-row">
              <div class="form-group form-column">
                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" placeholder="MM/YY" />
              </div>
              <div class="form-group form-column">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="CVV" />
              </div>
            </div>
            <button
              type="submit"
              class="click-button"
              onclick={() => successNavigator()}
            >
              PAY NOW
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
