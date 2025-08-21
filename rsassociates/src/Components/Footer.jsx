import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Css/Footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-about">
          <h2 className="footer-logo">RS Associates</h2>
          <p>
            RS Associates is a trusted financial services company offering
            insurance and loan solutions tailored to your needs.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
             <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaEnvelope /> info@rsassociates.online</p>
          <p><FaMapMarkerAlt /> Tanuku, Andhra Pradesh</p>
          <h4>Open Hours</h4>
          <p>Mon – Sat: 10:00 am – 6:00 pm</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get our latest updates & news.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">➤</button>
          </form>
          <p className="footer-phone">
            <FaPhoneAlt /> <strong>+91 91433 64777</strong>
            <br /> Call to Our Experts
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RS Associates. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
