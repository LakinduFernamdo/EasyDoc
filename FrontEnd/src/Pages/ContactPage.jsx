import React, { useState, useEffect } from 'react';
import Navbar from '../HeaderComponents/NavBar/NavBar.jsx';
import '../styles/contactus.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.form-group input, .form-group textarea, button');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className="contact-page">
      <Navbar />
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>Email: <a href="mailto:lakinduchethana2@gmail.com">lakinduchethana2@gmail.com</a></p>
        <p>Address: Gangodawila, Sri Soratha Mawatha, Nugegoda, Sri Lanka</p>
        <p>Phone: +94 77 123 4567</p>
      </div>
    </div>
  );
}

export default ContactPage;
