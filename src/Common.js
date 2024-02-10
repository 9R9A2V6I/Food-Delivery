import React from "react";
import Navbar from "./Component/Navbar/Navbar";

import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";

function Common() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Common;
