import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../HeaderComponents/NavBar/NavBar";
import Hero from "../UserHero/Hero";
import Selection from "../UserFeature/Selection";
import Fotter from '../FooterComponent/Footer';

function User() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Selection />
      <Fotter/>
    </div>
  );
}

export default User;
