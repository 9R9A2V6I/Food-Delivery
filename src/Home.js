import Banner from "./Component/Banner/Banner";
import Menubar from "./Component/Menubar/Menubar";
import Delivery from "./Component/Delivery/Delivery";
import Shipping from "./Component/Shipping/Shipping";
// import Silver from "./Component/Silver/Silver";
import Menu_A from "./Component/About_us/Menu_A/Menu_A"
import Blog from "./Component/Blog/Blog";
import Newsletter from "./Component/Newsletter/Newsletter";
import SpashScreen from "./Component/SpashScreenBar/SpashScree";
import { useState,useEffect } from "react";


import React from 'react'
 function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Check if the page is being reloaded
  //   if (window.performance.navigation.type === 1) {
  //     // Page is being reloaded
  //     setLoading(true);

  //     // Simulate some asynchronous task
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000); // Adjust the duration as needed
  //   } else {
  //     // Page is not being reloaded
  //     setLoading(false);
  //   }
  // }, []);
  return (
   <>
   <SpashScreen/>
   <Banner/>
   <Menubar/>
   <Delivery/>
   <Shipping/>
   <Menu_A/>
   <Blog/>
   <Newsletter/>
   
   </>
  )
}
export default Home
