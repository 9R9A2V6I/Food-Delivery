import React from 'react';
import "./Shipping.css";
import temp1 from "../../Assets/template.png";
import temp2 from "../../Assets/separator_dark.png";
import temp3 from "../../Assets/te.jpg";
import temp4 from "../../Assets/te1.jpg";
const Shipping = () =>
{
  return (
    <div className='shippingContainer'>
    <div className='shippingBox'>
      
     
      
    <div className='shippingTextContainer'>
        <h1 className='shippingtec'>WE ARE LEGEND</h1>
        <p>WE DON’T JUST MAKE PIZZA. WE MAKE
          PEOPLE’S DAYS. VINCENT PIZZERIA WAS
           BUILT ON THE BELIEF THAT PIZZA
            SHOULD BE SPECIAL, AND WE CARRY THAT
             BELIEF INTO EVERYTHING WE DO</p>
             <img src={temp2} alt="" />

             <p>What’s our purpose at Vincent? Moments of Excitement. All made possible by
               our flavor, innovation and, most importantly, by unlocking potential in our
                team members.</p>

                <p>With more than 50 years of experience under our belts, we understand how 
                  to best serve our customers through tried and true service principles. 
                  Instead of following trends, we set them. We create food we’re 
                  proud to serve and deliver it fast, with a smile. No matter where you find us,
                   we’re making sure each meal our customers enjoy is delicious and one-of-a-kind.</p>
      </div>
      <div className='testimoniamBox'>
      <div className='firstTesti'>
      <p>Vincent was one of the first restaurants I discovered 
        upon moving to New York last summer, and it remains a favorite. 
        Despite its sizable menu full of pastas, sandwiches, and pizzas, 
        I almost always get the same thing – the Vincent pizza.
         It’s made with Ricotta & Marinara sauces, spiced with oregano,
          and topped with eggplant, red onions, basil, Pecorino Romano & Mozzarella. 
          It really is one of the best pizzas I’ve ever had – and I eat a lot of pizza</p>
      </div>
      <div className='testimoniam1st'>
      <img src={temp3} alt=""  className='testiImg1'/>
      <div className='secondtxt'>
      <h4>ADAM JEFFERSON</h4>
      <p>Lawyer, New York</p>
      </div>
      </div> 
       <div className='firstTesti'>
     
      <p>The pizza is delicious! The crust is thin and crispy, 
        great sauce, and awesome cheese blend. And it makes a cute cheap
         date! </p>
      </div>
      <div className='testimoniam1st'>
      <img src={temp4} alt=""  className='testiImg1'/>
      <div className='secondtxt'>
      <h4>ADAM JEFFERSON</h4>
      <p>Lawyer, New York</p>
      </div>
      </div>

      </div>
    </div>
     
    </div>
  )
}
export default Shipping;