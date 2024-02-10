import React from 'react';
import './Footer.css';
import fot1 from '../../Assets/silverwhite.png';
import { NavLink, Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/" className="logoImgBarFooter">
        <img src={fot1} alt="" className="footerImg" />
      </Link>
      <ul className="footerMenu">
        <Link to="/" className="linkNavbar">
          <li>HOME</li>
        </Link>
        <Link to="menu" className="linkNavbar">
          <li>MENU</li>
        </Link>
        {/* <li>FEATURES</li> */}
        <Link to="about" className="linkNavbar">
          <li>ABOUT</li>
        </Link>
        <div className="linkNavbarLogin">
          <Link to="login" className="linkNavbar">
            <li>LOGIN /</li>
          </Link>
          <Link to="signup" className="linkNavbar">
            <li>SIGNUP</li>
          </Link>
        </div>
        {/* <li>BLOG</li> */}
        <Link to="contact" className="linkNavbar">
          <li>CONTACT</li>
        </Link>
      </ul>
      <p className="footertxt">
        Copyright © 2020 Silver Spoons. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
