import React from "react";
import "./Blog.css";
import blog1 from "../../Assets/back_3.jpg";
import blog2 from "../../Assets/back4.png";
// import { Outlet } from ';
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="blogBox">
          <div className="blogTextContainer">
            <p>NOT JUST A PIZZA, BUT LIFESTYLE</p>
            <h1 className="blogTec">SOMETHING FROM THE BLOG</h1>
            <img src={blog2} alt="" />
            <p className="blogTxt">
              And yes, we’re pizza people. But we’re also human people, we lead
              with our hearts, we believe in giving back <br /> to the global
              community. Join us, welcome to Our Blog
            </p>
          </div>
        </div>
        <div className="blogBottomContainer">
          <div className="blogBootemCon">
            <div className="blogCont1">
              <p>APRIL 6, 2017</p>
              <h3 className="blogg">HEALSY FOOD FOR HEALTHY BODY</h3>
              <div className="blogButton">
                {/* <Link to="about"> */}
                  <h1 className="blogbuttonText">READ MORE</h1>
                {/* </Link> */}
              </div>
            </div>
            <div className="blogCont1">
              <p>APRIL 6, 2017</p>
              <h3 className="blogg">FOOD DESIGN TRENDS 2016</h3>
              <div className="blogButton">
                <h1 className="blogbuttonText">READ MORE</h1>
              </div>
            </div>
            <div className="blogCont1">
              <p>APRIL 6, 2017</p>
              <h3 className="blogg">3 INGREDIENT FETTUCCINE ALFREDO</h3>
              <div className="blogButton">
                <h1 className="blogbuttonText">READ MORE</h1>
              </div>
            </div>
            <div className="blogCont1">
              <p>APRIL 6, 2017</p>
              <h3 className="blogg">KITCHEN ESSENTIALS GIVEAWAY !</h3>
              <div className="blogButton">
                <h1 className="blogbuttonText">READ MORE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Blog;
