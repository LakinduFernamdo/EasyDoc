import React from "react";
import Navbar from "../HeaderComponents/NavBar/NavBar.jsx";
import Footer from "../FooterComponent/Footer.jsx";
import "./index.css";
import "../styles/aboutus.css";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="about-page ">
          <h2>About Us</h2>
          <p>
            We proudly offer the e-channeling service of Lifeline Hospital, a
            trusted healthcare provider under Lifeline Hospital PVT (LTD). With
            years of experience in managing seamless online medical
            appointments, we ensure a hassle-free, secure, and efficient process
            for both patients and healthcare professionals. Our expertise and
            commitment to excellence make quality healthcare more convenient and
            accessible for all.
          </p>
        </div>
      </div>
      <Footer
        Fb_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
        Insta_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
      />
    </div>
  );
}

export default AboutPage;


