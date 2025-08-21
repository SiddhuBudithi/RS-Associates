import React from "react";
import "./Css/About.css";
import imageabout from "../images/about.jpg"; 

export default function About({
  imageSrc = imageabout,
  years = 5,
  phone = "+91 9143364777",
}) {
  return (
    <section className="aboutRS">
      <div className="aboutRS__media">
        <img className="aboutRS__img" src={imageSrc} alt="RS Associates team" />
        <div className="aboutRS__badge">
          <span className="aboutRS__years">{years}</span>
          <span className="aboutRS__label">
            Years of
            <br />
            Experience
          </span>
        </div>
      </div>

      <div className="aboutRS__content">
        <div className="aboutRS__kicker">About Company</div>
        <h2 className="aboutRS__title">
          We provide trusted financial & insurance solutions.
        </h2>
        <p className="aboutRS__subtitle">
          Expert advice. Personalized plans. Peace of mind.
        </p>

        <ul className="aboutRS__list">
          <li>Wide Range of Services</li>
          <li>Personalized Guidance</li>
          <li>Hassle-Free Experience</li>
        </ul>

        <p className="aboutRS__body">
          At <strong>RS Associates</strong>, we help individuals and families
          choose the right loans and insurance with clarity and confidence. From
          comparing options to completing paperwork, our team makes every step
          simple, transparent, and stress-free.
        </p>

        <div className="aboutRS__ctaRow">
          {/* <button
            type="button"
            className="aboutRS__btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Get Started
          </button> */}

          <a className="aboutRS__phone" href={`tel:${phone.replace(/\s+/g, "")}`}>
            <span className="aboutRS__phoneIcon" aria-hidden="true">📞</span>
            <span className="aboutRS__phoneText">{phone}</span>
            <span className="aboutRS__phoneSub">Call our experts</span>
          </a>
        </div>
      </div>
    </section>
  );
}
