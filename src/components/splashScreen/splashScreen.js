import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setNavVisible } from "../../redux/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import "./splashScreen.css";

function SplashScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavVisible(false));
  }, []);

  let message = "";
  const loggedOut = useSelector(state => state.isLogedInReducer);
  if(loggedOut.userLogin === 'logout') {
    message = "logged Out!";
    window.location.reload(false);
  }
  return (
    <div className="splashScreen">
      <div className="splashScreen-overlay" />
      <h1 className="welcome-title">BIKE STORE</h1>
      <p>
        Discover the huge selection of motorbike clothing and accessories now at
        FC-Moto! Discover the huge selection of motorbike clothing. Sale up to
        60% Shipping with DHL and UPS. PayPal and Credit Card. Best offers.
        Great price and service. Brands: Held, Alpinestars, FOX.
      </p>
      <Link to="../main">Book an Appointment</Link>
      <p>{message}</p>
    </div>
  );
}

export default SplashScreen;
