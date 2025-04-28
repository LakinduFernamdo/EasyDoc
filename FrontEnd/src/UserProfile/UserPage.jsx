import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Hero from "../UserHero/Hero.jsx";
import Selection from "../UserFeature/Selection.jsx";
import Fotter from '../FooterComponent/UserFooter.jsx';


function UserPage() {
  return (
    <div>
      <Hero />
      <Selection />
      <Fotter />
    </div>
  )
}

export default UserPage;