import React from "react";
import NavBar from "../HeaderComponents/NavBar/NavBar.jsx";
import Footer from "../FooterComponent/Footer.jsx";
import "./index.css";

function ContactPage() {
  const email = "support@lifelinehospital.com";

  function sendEmail(event) {
    event.preventDefault(); // Prevents form from actually submitting

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:asthisaru@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  }



  return (
    <div>
      <NavBar />

      <div className="page-container pt-5">
        <div className="contact-page">
          <h1 className="display-4 fw-bold text-body-emphasis mb-5">Contact</h1>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea id="message" cols={36} rows={6} />
              <br />
              <button type="submit" className="btn btn-primary mx-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer
        Fb_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
        Insta_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67"
      />
    </div>
  );
}

export default ContactPage;
