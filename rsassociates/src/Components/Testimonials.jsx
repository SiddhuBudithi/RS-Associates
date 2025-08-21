import React from "react";
import './Css/Testimonials.css';
import image1 from "../images/man.jpg";
import image2 from "../images/woman.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Tanuku",
      feedback:
        "I was confused by all the health insurance options. RS Associates were amazing – they explained everything clearly and helped me choose the right plan for my needs. Now I feel confident that I'm covered.",
      image: image1,
    },
    {
      name: "Priya Reddy",
      location: "Tanuku",
      feedback:
        "I was worried about getting good health insurance after retirement. RS Associates found me a great Medicare supplement plan that fills in the gaps and keeps my out-of-pocket costs manageable.",
      image: image2,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <p className="testimonials-subtitle"> TESTIMONIALS </p>
        <h2 className="testimonials-title">
          What our customers are <span>talking about</span>
        </h2>
        <p className="testimonials-desc">
          Our clients rave about our ability to simplify complex plans,
          find the perfect fit for their needs, and provide ongoing support.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image-wrapper">
                  <img src={t.image} alt={t.name} className="testimonial-image" />
                  <div className="quote-icon">“</div>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-location">{t.location}</p>
              </div>
              <p className="testimonial-feedback">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
