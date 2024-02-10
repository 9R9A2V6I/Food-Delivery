import React from "react";
import "./Silver.css";
import sil1 from "../../Assets/f1.gif";
import sil2 from "../../Assets/f2.gif";
import sil3 from "../../Assets/f3.gif";
import sil4 from "../../Assets/f4.gif";
import sil5 from "../../Assets/f5.gif";
import sil6 from "../../Assets/f6.gif";
import sil7 from "../../Assets/f7.gif";
import sil8 from "../../Assets/f8.gif";

const images = [{ img: sil1, Text: "MARGHERITA",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$2.60" },
{ img: sil2, Text: "VINCENT",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$3.00 – $16.00" },
{ img: sil3, Text: "PEPPERONI",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$2.90" },
{ img: sil4, Text: "DIABLO",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$3.60" },
{ img: sil5, Text: "CARBONARA",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$2.80" },
{ img: sil6, Text: "CAPRICCIOSA",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$2.70" },
{ img: sil7, Text: "PROSCIUTTO",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$3.20" },
{ img: sil8, Text: "SAPORITA",Para:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",Price:"$3.60" },];

function Silver() {
  return (
    <div className="silverMainContainer">
     <div className="silverList">
     <h1 className="silverHead">DISCOVER OUR MENU</h1>
      <ul className="silverMenu">
        <li>BURGERS</li>

        <li>DESSERTS</li>

        <li>DRINKS</li>

        <li>PASTA</li>

        <li>PIZZAS</li>

        <li>SALADS</li>
      </ul>
     </div>
      <div className="silverBarContainer">
        {images.map((image) => {
          return (
            <div className="silverImgContainer">
              <img src={image.img} className="silverImg" />
              <h1 className="silverTxt">{image.Text}</h1>
              <p>{image.Para}</p>
              <p>{image.Price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Silver;
