import React from "react";
import Swiper from "../HomeComp/Swiper/Swiper.jsx";
import DropList from "../HomeComp/DropList/DropdownList.jsx";
import HeroSection from "../HomeComp/Hero/HeroSection.jsx";
import Features from "../HomeComp/FeatureSection/FeatureSection.jsx";
import NavBar from "../HeaderComponents/NavBar/NavBar.jsx";
import Footer from "../FooterComponent/Footer.jsx";
import "./index.css";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="page-container">
        <HeroSection />
        <Swiper />
        <DropList />
        <Features />
      </div>
      <div>
        <Footer
          Fb_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
          Insta_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
        />
      </div>
    </div>
  );
}

export default HomePage;
