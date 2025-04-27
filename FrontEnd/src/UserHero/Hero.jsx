import React from "react";    
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Hero(){

    return(
        <div className="px-4 py-3 my-4 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Welcome, USER</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to user page, where you are able to make an appoinment,
            pay clinical bills, check you history and upload your lab reports. We
            believe that online health care doesn't have to be stressful or complicated, and
            we are passionate about making the process as seamless and enjoyable
            as possible.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;