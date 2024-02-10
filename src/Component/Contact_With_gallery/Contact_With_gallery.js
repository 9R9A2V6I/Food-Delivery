import React from "react";
import "./Contact_With_gallery.css";
import con1 from "../../Assets/about_4.jpg";
import cont2 from "../../Assets/back4.png";
import con3 from "../../Assets/img_6.jpg";
import con5 from "../../Assets/img_5.jpg";
import con4 from "../../Assets/bac1.jpg";
import GoogleMapReact from "google-map-react";
function Contact_With_gallery() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="ContactContainer">
      <div className="ContactHeadderBar">
        <h1 className="contactTxt">CONTACT US</h1>
      </div>
      <img src={con1} className="contactImage" />
      <div className="contactFormContainer">
        <div className="leftContactBar">
          <div className="contactTxtContainer">
            <p>NOT JUST A PIZZA, BUT LIFESTYLE</p>
            <h1 className="contactTec">MAKE A RESERVATION</h1>
            <img src={cont2} alt="" />
            <p className="contactPera">
              And yes, we’re pizza people. But we’re also human people, we lead
              with our hearts, we believe in giving back to the global
              community. Join us, welcome to our pizzerias!
            </p>
            <div className="conatctFoamBar">
            <div className="contactBar">
            <div className="contactBoxContainer ">
             <input 
             className="box"
             text= "name"
             placeholder="Your Name"
             />
            </div>
            <div className="contactBoxContainer ">
            <input 
             className="box"
             text= "name"
             placeholder="Your Phone"
             />
            </div>
            </div>
            <div className="contactBar">
            <div className="contactBoxContainer ">
             <input 
             className="box"
             text= "name"
             placeholder="Date"
             />
            </div>
            <div className="contactBoxContainer ">
            <input 
             className="box"
             text= "name"
             placeholder="Number Of People"
             />
            </div>
            </div>
            <div className="messageBox">
              <input type="text"  className="messageInputType"/>
            </div>
          <button className="buttonBox">BOOK A TABLE</button>
          </div>
          </div>
        </div>
      <div className="rightContactBar">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9016558330545!2d75.86407911399996!3d22.694704634199184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd21a990e8bf%3A0xa5845ba1d3981efb!2sSonnen%20Techs!5e0!3m2!1sen!2sin!4v1678009261211!5m2!1sen!2sin"
          width="600"
          height="550"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <div className="imgConContainer">
        <h1 className="contactTxt1">OUR BRANCHES</h1>
        <div className="imgContactContainer">
          <div className="imggalleryContainer">
            <div className="galleryImgCon">
              <img src={con3} className="gallerycon" />
              <div className="galleryTxtContainer">
                <h1 className="galleryT">INDORE</h1>
                <p className="galleryPera">
                  Plot no.1, 2 scheme no.44, Mechanic Nagar, Indore, Madhya
                  Pradesh 452014
                </p>
              </div>
            </div>
            <div className="galleryImgCon">
              <img src={con5} className="gallerycon" />
              <div className="galleryTxtContainer">
                <h1 className="galleryTT">BHOPAL</h1>
                <p className="galleryP">
                  Roshanpura Naka, beside Rajbhavan Road, TT Nagar, Bhopal,
                  Madhya Pradesh 462003
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_With_gallery;
