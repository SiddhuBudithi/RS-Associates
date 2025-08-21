import React, { useState } from "react";
import './Css/FAQ.css'

const FAQ = () => {
  const faqs = [
    { q: "How do I apply for a loan?", a: "You can apply online via our website or contact us for assistance." },
    { q: "What documents are required?", a: "Basic KYC, income proof, pan card and aadhar card for address proof are usually required." },
    { q: "Do you offer online consultations?", a: "Yes, our advisors are available via phone, email, and video call." },
    { q: "Are your insurance policies IRDAI approved?", a: "Yes, all our insurance offerings are IRDAI approved and secure." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
       {faqs.map((item, index) => (
      <div key={index} className="faq-item">
        <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.q}
          <span>{openIndex === index ? "-" : "+"}</span>
        </button>
        {openIndex === index && <p>{item.a}</p>}
      </div>
    ))}
  </div>
    </section>
  );
};

export default FAQ;
