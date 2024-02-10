import React, { useState, useEffect } from 'react';
import cartHeadImg from '../../Assets/images-removebg-preview.png';
import './AddCart.css';
import { Search, ShoppingCart, Clear } from '@mui/icons-material';
import cartProduct from '../../Assets/Burger1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartSlice';

export default function AddCart() {
  const [showHead, setShowHead] = useState();

  const navigate = useNavigate();
  const returnMenuHAndle = () => {
    navigate('/menu');
  };

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const showHeadToggle = () => {
    if (cartItems.length > 0) {
      setShowHead(true);
    } else {
      setShowHead(false);
    }
  };
  useEffect(() => {
    showHeadToggle();
  }, []);

  const handleBuyNow = (item) => {
    // Handle the "Buy Now" action for the selected item
    // For example, navigate to a checkout page with the selected item
    navigate(
      `/buyBar?image=${item.img}&price=${item.Price}&name=${item.Text}&QTY=${item.quantity}`
    ); // Use the appropriate URL and parameters
  };
  return (
    <>
      <div className="headBar">
        <h1 className="cartHeadText">Cart</h1>
      </div>
      <div className="contentBar">
        <div className="childContentBar">
          <div className="leftBarCart">
            <hr className="hrLineCart" />
            <div className="leftBarHead">
              {showHead ? (
                <h1 className="leftHeadTextCart">
                  <ShoppingCart className="addCartIcon" />
                  Your cart is Show Food.
                </h1>
              ) : (
                <h1 className="leftHeadTextCart">
                  <ShoppingCart className="addCartIcon" />
                  Your cart is currently empty.
                </h1>
              )}
            </div>
            <div className="returnBtn" onClick={() => returnMenuHAndle()}>
              <h1>Return To shop</h1>
            </div>
            {cartItems.map((item, index) => (
              <div className="productShowingBar">
                <img src={item.img} alt="" className="productShowImg" />
                <div className="productShowText">
                  <h1>{item.Text}</h1>
                  <p>{item.Para}</p>

                  <p className="productPricePara">
                    {item.Price} <span>Qty: {item.quantity}</span>
                  </p>

                  <div className="btnCartBar">
                    <div className="buyBtn" onClick={() => handleBuyNow(item)}>
                      <p>Buy Now</p>
                    </div>
                    <div
                      className="removeBtn"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <p>Remove Cart</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rightBartCart">
            <div className="searchBarCart">
              <input type="text" className="cartSearch" />
              <Search className="serchAddCartIcon" />
            </div>
            <div className="productCartBar">
              <h1 className="productCartHead">FEATURED POSTS</h1>

              <div className="cartProductDetail">
                <img src={cartProduct} alt="" className="productImg" />
                <div>
                  <h1 className="productDetailsHead">CAPRICCIOSA</h1>
                  <p className="productDetailsPara">$36</p>
                </div>
              </div>

              {/* <div className="cartProductDetail">
                <img src={cartProduct} alt="" className="productImg" />
                <div>
                  <h1 className="productDetailsHead">
                    HEALSY FOOD FOR HEALTHY BODY
                  </h1>
                  <p className="productDetailsPara">April 6, 2017</p>
                </div>
              </div> */}
            </div>

            <div className="productCartBar">
              <h1 className="productCartHead">TAGS</h1>
              <div className="cartProductDetailTags">
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Blog</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Food</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
              </div>
              <div className="cartProductDetailTags">
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">LifeStyle</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Margherita</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
              </div>
              <div className="cartProductDetailTags">
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">PIzza</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Pizzeria</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
              </div>
              <div className="cartProductDetailTags">
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Restaurant</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
                <div className="TagsNameBar">
                  <h1 className="TagsNameBarText">Vincent</h1>
                  <div className="TagsNameBarTextDot"></div>
                </div>
              </div>
            </div>
            <div className="productCartBar">
              <h1 className="productCartHead">INSTAFEED</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
