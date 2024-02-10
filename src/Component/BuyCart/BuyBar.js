import React from 'react';
import { useLocation } from 'react-router-dom';
import './BuyBar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function BuyBar() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const productId = queryParams.get('productId');
  const image = queryParams.get('image');
  const price = queryParams.get('price');
  const name = queryParams.get('name');
  const Qty = queryParams.get('QTY');

  const navigator = useNavigate();

  const payNavigation = () => {
    navigator('/payBar');
  };
 

  return (
    <>
      <div className="buyBarMain">
        <h1>Checkout Page</h1>
        {/* <p>Product ID: {productId}</p> */}

        <div className="buyProductBar">
          <img src={image} alt={name} className="buyBarProduct" />
          <div className="butProductDetails">
            <p className="nameBuyDetails"> {name}</p>
            <p className="buyPrice">{price}</p>
            <p className="buyQty">QTY:{Qty}</p>

            <div className="buyButton" onClick={()=>payNavigation()}>
              <p>Buy Now</p>
            </div>
          </div>
        </div>

        {/* Add other checkout-related content */}
      </div>
    </>
  );
}
