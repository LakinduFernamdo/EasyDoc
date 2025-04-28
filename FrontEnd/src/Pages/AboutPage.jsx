import React,{useEffect,useState} from 'react';
import Navbar from '../HeaderComponents/NavBar/NavBar.jsx';
import '../styles/aboutus.css';

function AboutPage ()
{
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() =>
  {
    setIsLoading(false);

    const observer=new IntersectionObserver((entries,observer) =>
    {
      entries.forEach(entry =>
      {
        if(entry.isIntersecting)
        {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },{
      threshold: 0.1
    });

    const elementsToAnimate=document.querySelectorAll('.animate');
    elementsToAnimate.forEach(element => observer.observe(element));

    return () =>
    {
      observer.disconnect();
    };
  },[]);

  return (
    <div className={isLoading? 'loading':''}>
      <Navbar />
      <div className='about-page'>
        <h2 className="animate">About Us</h2>
        <div className="about-image-container">
          <img
            src="/Images/online-marketing.jpg"
            alt="Doctor"
            className="about-image animate"
          />
        </div>
        <p className="animate">
          Welcome to <strong>EasyDoc</strong>, where healthcare meets innovation! Our goal is to provide a seamless, intuitive platform that helps you manage your health effortlessly. Whether you're a patient looking for easy access to healthcare services or a doctor wanting to connect with patients, EasyDoc is here to simplify your healthcare journey.
        </p>
        <p className="animate">
          In today's fast-paced world, we believe in making healthcare as easy and accessible as possible. We offer a range of services to ensure that your medical needs are met with just a few clicks. Say goodbye to the hassle of long waits and complicated processes—EasyDoc is here to bring healthcare directly to you!
        </p>

        <h3 className="animate">Our Services</h3>
        <div className="services">
          <div className="service-item animate">
            <h4>Virtual Consultations</h4>
            <p>
              Meet with certified doctors through secure video calls from the comfort of your home. Our virtual consultation service connects you with healthcare professionals instantly—no more waiting rooms!
            </p>
          </div>

          <div className="service-item animate">
            <h4>Appointment Booking</h4>
            <p>
              Easily schedule appointments with your preferred doctors at times that suit you. No more calling clinics or trying to navigate confusing schedules—book your appointment online in minutes!
            </p>
          </div>

          <div className="service-item animate">
            <h4>Medical Records Management</h4>
            <p>
              Keep track of your medical history and treatment records in one secure location. EasyDoc makes it easy to store and access your health data whenever you need it—without the paper trail.
            </p>
          </div>

        </div>

        <h3 className="animate">Why Choose EasyDoc?</h3>
        <p className="animate">
          At EasyDoc, we are driven by innovation, care, and convenience. Here's why you should choose us:
        </p>
        <ul className="animate">
          <li><strong>Seamless Access:</strong> Get instant access to healthcare providers, appointments, and medical records—all in one place.</li>
          <li><strong>Reliable & Secure:</strong> Your privacy and security are our top priority. Our platform ensures that all your data is protected.</li>
          <li><strong>Affordable Healthcare:</strong> We believe in making healthcare affordable and accessible for everyone, without the hidden costs.</li>
        </ul>

        <h3 className="animate">Our Vision</h3>
        <p className="animate">
          At EasyDoc, we envision a world where healthcare is available at your fingertips—no matter where you are or what time it is. We're committed to breaking down barriers and making healthcare simpler, faster, and more accessible for everyone.
        </p>

        <h3 className="animate">Join Us on Our Journey</h3>
        <p className="animate">
          Become a part of the EasyDoc family today! Whether you're a patient looking for a hassle-free healthcare experience or a doctor seeking to provide top-notch care with ease, EasyDoc is here to make your life easier. Let's build a healthier tomorrow, together!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;