import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import echannelPic from './echannelling.png';

function HeroSection(props) {
    
    return(
        <>
        <div className="px-4 pt-1 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
            E-Channelling With Ease
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Welcome to our website, where we are on a mission to provide
              exceptional E-Channelling services to patients of Lifeline Hospital.
              We believe that E-Channelling doesn't have to be stressful or
              complicated, and we are passionate about making the process as
              seamless and efficient as possible.
            </p>
          </div>
          <div className="overflow-hidden" style={{"max-height": "30vh"}}>
            <div className="container px-5">
              <img
                src={echannelPic}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="E-channeling image"
                width="400"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroSection;