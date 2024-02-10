import React from "react";
import "./About_us.css";
import about1 from "../../Assets/back_2.png";
import about2 from "../../Assets/about_1-1.jpg";
import about3 from "../../Assets/separator_light1.png";
import about4 from "../../Assets/img_5.jpg";
import about5 from "../../Assets/img_6.jpg";
import about6 from "../../Assets/bac1.jpg";
import about7 from "../../Assets/back4.png";
import about8 from "../../Assets/te1.jpg";
import about9 from "../../Assets/partner_1.jpg";
import about10 from "../../Assets/partner_2.jpg";
import about11 from "../../Assets/partner_3.jpg";
import about12 from "../../Assets/partner_4.jpg";
import about13 from "../../Assets/partner_5.jpg";
import about14 from "../../Assets/partner_6.jpg";
import about15 from "../../Assets/team_1.jpg";
import about16 from "../../Assets/team_2.jpg";
import about17 from "../../Assets/team_3.jpg";
import about18 from "../../Assets/icon_1.png";
import about19 from "../../Assets/icon_2.png";
import about20 from "../../Assets/icon_3.png";
const images = [about4, about5];
const About_us = () => {
  return (
    <div className="mainAboutContainer">
      <div className="aboutContainer">
          <h1 className="aboutTxt">ABOUT OUR PIZZERIA</h1>
        <div className="aboutImg"></div>
      </div>

      <img src={about2} className="aboutImage" />
      <div className="vicentContainer">
        <h1 className="vincenttxt">WE ARE SILVER SPOONS</h1>
        <p className="vincentPera">
          WE DON’T JUST MAKE PIZZA. WE MAKE PEOPLE’S DAYS. SILVER SPOONS
          PIZZERIA WAS BUILT ON THE BELIEF THAT PIZZA SHOULD BE SPECIAL, AND WE
          CARRY THAT BELIEF INTO EVERYTHING WE DO.
        </p>
        <img src={about3} alt="" />
        <p className="vincentpe">
          With more than 50 years of experience under our belts, we understand
          how to best serve our customers through tried and true service
          principles.Instead of following trends, we set them. We create food
          we’re proud to serve and deliver it fast, with a smile. No matter
          where you find us, we’re making sure each meal our customers enjoy is
          delicious and one-of-a-kind.
        </p>
      </div>
      <div className="imgAboutUsContainer">
        <div className="imgContainerA">
          <div className="aboutImgCon">
            <img src={about5} className="imageCon" />
            <div className="aboutTxtContainer">
              <h1 className="aboutT">INDORE</h1>
              <p className="aboutPera">
                Plot no.1, 2 scheme no.44, Mechanic Nagar, Indore, Madhya
                Pradesh 452014
              </p>
            </div> 
          </div>
          <div className="aboutImgCon">
            <img src={about4} className="imageCon" />
            <div className="aboutTxtContainer">
              <h1 className="aboutTT">BHOPAL</h1>
              <p className="aboutP">
                Roshanpura Naka, beside Rajbhavan Road, TT Nagar, Bhopal, Madhya
                Pradesh 462003
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clientsContainer">
        <div className="clintMainText">
          <p>NOT JUST A PIZZA, BUT LIFESTYLE</p>
          <h1 className="clientText">OUR CLIENTS SAY</h1>
          <img src={about7} alt="" />
          <p className="clintPera">
            silver spoons was one of the first Resturant i discovered upon on
            moving tonew york last summer, and it remains a favorite. Despite
            its sizable menu full of pastas, sandwiches,and pizzas i always
            almost get the same thing the silver spoons pizza. its made with
            Ricotta & Marinara sauces, spiced with oregano, and topped with
            eggplant, red onions, basil, Pecarino Romano & Mozzarella. it really
            is one of the best pizzas i have ever had and i eat a lot of pizza
          </p>
          <div className="clientReview">
            <img src={about8} alt="" className="ClientRImg" />
            <div className="ClientTT">
              <h4>VICTORIA SCOOT</h4>
              <p className="clintT">Lawyer, New York</p>
            </div>
          </div>
        </div>
      </div>

      <div className="TeamContainer">
        <div className="teamInnerContainer">
          <img src={about9} className="teamImg" />

          <img src={about10} className="teamImg" />

          <img src={about11} className="teamImg" />

          <img src={about12} className="teamImg" />

          <img src={about13} className="teamImg" />

          <img src={about14} className="teamImg" />
        </div>
      </div>
      <div className="TeamTextContainer">
          <h1 className="teamtxt"> MEET OUR TEAM</h1>
        </div>
        <div className="teamImgContainer">
          <div className="teamMemberContainer">
        <img src={about15} className="teamIMG2" />
        <div className="teamBarTxt">
          <h2 className="teamBar">JOHN WILLIAMS</h2>
          <p>HOUSE CHEF</p>
        </div>
        
        </div>
        <div className="teamMemberContainer">
        <img src={about16} className="teamIMG2" />
        <div className="teamBarTxt">
          <h2 className="teamBar">SARA WELCH</h2>
          <p>WAITRESS</p>
        </div>
        
        </div>
        <div className="teamMemberContainer">
        <img src={about17} className="teamIMG2" />
        <div className="teamBarTxt">
          <h2 className="teamBar">EDWARD GRAY</h2>
          <p>BARMEN</p>
        </div>
        
        </div>
       
      
        </div>
        <div className=" RecipiesContainer">
        <div className="recipiesImgContainer">
        <div className= "recipiesContent">
          <img src={about18} alt="" />
          <div deliveryTextContainer>
            <h1 className="recipietec">QUALITY FOODS</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
        <div className="recipiesContent">
          <img src={about19} alt="" />
          <div deliveryTextContainer>
            <h1 className="recipietec">FASTEST DELIVERY</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
        <div className="recipiesContent">
          <img src={about20} alt="" />
          <div deliveryTextContainer>
            <h1 className="recipietec">ORIGINAL RECIPES</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
      </div>
        </div>

    </div>
  );
};

export default About_us;
