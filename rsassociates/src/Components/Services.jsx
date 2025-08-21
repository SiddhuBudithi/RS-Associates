import React from "react";
import "./Css/Services.css";
import {
  FaHeartbeat,
  FaCar,
  FaPlane,
  FaShip,
  FaUsers,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">

        <div className="service-card">
           <FaUserShield className="service-icon" />
          <h3>Life Insurance</h3>
          <p>Protect your family’s future with tailored life coverage.</p>
        </div>

        <div className="service-card">
          <FaHeartbeat className="service-icon" />
          <h3>Health Insurance</h3>
          <p>
            Secure quality healthcare and safeguard against medical expenses.
          </p>
        </div>

        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Motor Insurance</h3>
          <p>Stay protected on the road with complete vehicle coverage.</p>
        </div>

        <div className="service-card">
          <FaPlane className="service-icon" />
          <h3>Travel Insurance</h3>
          <p>Enjoy worry-free journeys with comprehensive travel protection.</p>
        </div>

        <div className="service-card">
          <FaShip className="service-icon" />
          <h3>Marine Insurance</h3>
          <p>Protect your cargo and vessels with reliable marine coverage.</p>
        </div>

        <div className="service-card">
          <FaUsers className="service-icon" />
          <h3>Group Insurance</h3>
          <p>Comprehensive benefits designed for your team and workforce.</p>
        </div>

        <div className="service-card">
          <FaShieldAlt className="service-icon" />
          <h3>General Insurance</h3>
          <p>Flexible coverage for everyday risks and valuable assets.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
