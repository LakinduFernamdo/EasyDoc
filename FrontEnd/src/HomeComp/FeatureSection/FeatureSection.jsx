import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TopicHeads from "../TopicHeads";
import "./feature.css";
import confy from './cup-hot-fill.svg';
import time from './stopwatch.svg';
import laptop from './laptop.svg';


function Features() {
  return (
    <>
      <div className="container px-2 py-5" id="featured-3">
        <TopicHeads text="Why E-Channelling With Us?" />
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={confy} alt="coffe cup img" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Convenience</h3>
            <p>
              Patients can select their preferred doctors based on
              specialization, availability, and consultation time, eliminating
              the need for in-person schedulliing.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={time} alt="stopwatch img"/>
            </div>
            <h3 className="fs-2 text-body-emphasis">Real-Time Updates</h3>
            <p>
              Doctors can update their availability in real time, ensuring
              accurate scheduling and avoiding appointment overlaps.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={laptop} alt="laptop img" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Multi-device Access</h3>
            <p>
              The platform will be accessible via both desktop and mobile
              devices, making it easy for patients to book, reschedule or cancel
              appointments as needed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
