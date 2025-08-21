import React from "react";
import './Css/Process.css'

const Process = () => {
  const steps = [
    { id: 1, title: "Consultation", desc: "We understand your needs and guide you with the best options." },
    { id: 2, title: "Proposal", desc: "We provide tailored solutions with complete transparency." },
    { id: 3, title: "Approval", desc: "Quick approval and hassle-free documentation process." },
    { id: 4, title: "Delivery", desc: "We deliver the policy/loan seamlessly with continued support." },
  ];

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>
        <div className="process-grid">
          {steps.map(step => (
            <div key={step.id} className="process-step">
              <div className="process-step-id">{step.id}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
