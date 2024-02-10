import React from "react";
import "./Menubar.css";
import img13 from "../../Assets/7-2-1-300x300 (1).gif";
import img14 from "../../Assets/4-300x300.gif";
import img15 from "../../Assets/7-2-1-300x300.gif";
import img16 from "../../Assets/8-300x300.gif";

const images = [img13, img14, img15, img16];
function Menubar() {
  return (
    <>
    <div className="menuMainContainer">
    <h1 className="menuHead">HOT SALES</h1>
      <div className="menuBarContainer">
       
        {images.map((image) => {
          return (
            <>
              <div className="menubarImgcontainer">
                <img src={image} className="menuImg" />
                <div className="menuTextContainer">
                  <h2 className="txt">CARBONARA</h2>
                  <p>
                    classic marinara sauce, authentic old-world pepperoni,
                    all-natural italian...
                  </p>
                  <h3>$8.30</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Menubar;
