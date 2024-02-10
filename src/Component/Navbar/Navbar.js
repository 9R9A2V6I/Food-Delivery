import React from 'react';
import './Navbar.css';
import '../Footer/Footer.css';
import {
  Search,
  KeyboardVoice,
  Smartphone,
  AddShoppingCart,
} from '@mui/icons-material';
import fot1 from '../../Assets/silverwhite.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconcart from '../../Assets/icon_cart.png';
import MobileIcon from '../../Assets/icon_phone.png';
import { Link } from 'react-router-dom';
const Resturant = () => {
  return (
    <div className="NavbarContainer">
      <div className="navTopBar">
        <div className="leftNavbar">
          <img src={MobileIcon} alt="" />
          <div className="leftBarContent">
            <h1>+91-999999999</h1>
            <p>8:00 am – 11:30 pm</p>
          </div>
        </div>
        <Link to="/" className="logoImgBar">
          <img src={fot1} alt="" className="footerImg" />
        </Link>

        <div className="rightNavbar">
          <div className="leftBarContent">
            <h1>$0.00</h1>
            <p>0 items – View Cart</p>
          </div>
          <Link to="cart" className='cartLink'>
            <img src={iconcart} alt="" />
          </Link>
        </div>
      </div>

      <ul className="footerMenu">
        <Link to="/" className="linkNavbar">
          <li>HOME</li>
        </Link>

        <Link to="menu" className="linkNavbar">
          <li>MENU</li>
        </Link>

        <Link to="about" className="linkNavbar">
          <li>ABOUT</li>
        </Link>

        <Link to="blog" className="linkNavbar">
          <li>BLOG</li>
        </Link>

        <div className="linkNavbarLogin">
          <Link to="login" className="linkNavbar">
            <li>LOGIN /</li>
          </Link>
          <Link to="signup" className="linkNavbar">
            <li>SIGNUP</li>
          </Link>
        </div>

        <Link to="contact" className="linkNavbar">
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};
export default Resturant;
