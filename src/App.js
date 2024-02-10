import React, { useState } from 'react';
import Resturant from './Component/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';
// import Topbar from "./Component/TopBar/Topbar";
import Navbar from './Component/Navbar/Navbar';

import Footer from './Component/Footer/Footer';
import About_us from './Component/About_us/About_us';
import Menu_A from './Component/About_us/Menu_A/Menu_A';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Component/Login/Login';
import Common from './Common';
import Contact_With_gallery from './Component/Contact_With_gallery/Contact_With_gallery';
import Blog_Stander from './Component/Blog_Stander/Blog_Stander';
import Signup from './Component/Signup/Signup';
import ScrollToTop from './ScrollToTop';
import AddCart from './Component/AddTOCart/AddCart';
import { Provider } from 'react-redux';
import store from './Redux/store';
import BuyBar from './Component/BuyCart/BuyBar';
import PayBar from './Component/PaymentBar/PayBar';
import SuccessM from './Component/SuccessMBar/SuccessM';

function App() {
  const [name, setName] = useState(1);
  const [lastName, setLastName] = useState('Gupta');

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Provider store={store}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Common />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About_us />} />
            <Route path="menu" element={<Menu_A />} />
            <Route path="contact" element={<Contact_With_gallery />} />
            <Route path="blog" element={<Blog_Stander />} />
            <Route path="cart" element={<AddCart />} />
            <Route path="buyBar" element={<BuyBar />} />
            <Route path="payBar" element={<PayBar />} />
            <Route path="successBar" element={<SuccessM />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
