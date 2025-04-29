import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TopicHeads from "../TopicHeads";
import "./Icons/feature.css";
import confy from './Icons/cup-hot-fill.svg';
import time from './Icons/stopwatch.svg';
import laptop from './Icons/laptop.svg';
import security from './Icons/icons8-cloud-firewall-48.png';
import money from'./Icons/clipboard2-check.svg';
import support from './Icons/teamwork-svgrepo-com.svg';
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

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={security} alt="security img" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Security Features</h3>
            <p>
              The platform will be secure with password system and protect client data from unauthorized access.
              User can also report any issues or concerns to the support team and secure their password by using a strong password.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={money} alt="money img" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Money Transaction</h3>
            <p>
              You can pay for your appointment through the website and the payment will be processed securely.
              Use visa,master card, or any other payment method.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={support} alt="money img" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Supporting Community</h3>
            <p>
              The platform will be conducted by a team of experienced doctors and support staff who are dedicated to providing the best possible care to patients.
              They will be available to answer any questions or concerns patients may have.If you have any questions or concerns, please don't hesitate to contact our superior support team.
              We are here to help.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
