import React from "react";
import "./Delivery.css";
import delIcon1 from "../../Assets/back_2.png";
import delIcon2 from "../../Assets/icon_1.png";
import delIcon3 from "../../Assets/icon_2.png";
import delIcon4 from "../../Assets/icon_3.png";

const Delivery = () => {
  return (
    <div className="diliveryContainer">
      <div className="deliveryImgContainer">
        <div className="deliveryContent">
          <img src={delIcon2} alt="" />
          <div deliveryTextContainer>
            <h1 className="deliverytec">QUALITY FOODS</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
        <div className="deliveryContent">
          <img src={delIcon3} alt="" />
          <div deliveryTextContainer>
            <h1 className="deliverytec">FASTEST DELIVERY</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
        <div className="deliveryContent">
          <img src={delIcon4} alt="" />
          <div deliveryTextContainer>
            <h1 className="deliverytec">ORIGINAL RECIPES</h1>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Delivery;
