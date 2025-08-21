import React from "react";
import "./Css/InsurancePlans.css";
import image01 from "../images/woman.png";
import image02 from "../images/family.png";
import image03 from "../images/1cr.png"; 
import image04 from "../images/investment.png"; 

const InsurancePlans = () => {
  return (
    <section className="life-insurance-section">
      {/* Main Heading */}
      <h2 className="life-title">Life Insurance</h2>
      <p className="life-description">
        The life insurance policy is a contract between the policyholder and the
        insurer. In a life insurance policy, the insurance company commits to pay
        a specified amount to the beneficiaries if the policyholder passes away
        within a certain time frame. In exchange, the policyholder pays an
        insurance premium.
      </p>
      <p className="life-description">
        Policyholders can also opt for critical illness benefits or additional
        accident coverage in certain types of policies. Buy life insurance
        online to provide financial assistance to your family in difficult times
        and ensure they remain stable financially after your death.
      </p>

      {/* Sub Heading */}
      <h3 className="life-subtitle">Life insurance plans for everyone</h3>
      <p className="life-subdesc">Select the plan that fits your goal.</p>

      {/* Cards Section */}
      <div className="life-card-container">
        <div className="life-card">
          <img
            src={image01}
            alt="Term insurance for women"
          />
          <div className="life-card-content">
            <p>Term insurance for women</p>
            {/* <button className="card-btn">➜</button> */}
          </div>
        </div>

        <div className="life-card">
          <img
            src={image02}
            alt="Life Insurance for NRI"
          />
          <div className="life-card-content">
            <p>Life Insurance for NRI</p>
            {/* <button className="card-btn">➜</button> */}
          </div>
        </div>

        <div className="life-card">
          <img
            src={image03}
            alt="₹1 Crore Term Plan"
          />
          <div className="life-card-content">
            <p>₹1 Crore Term plan</p>
            {/* <button className="card-btn">➜</button> */}
          </div>
        </div>

        <div className="life-card">
          <img
            src={image04}
            alt="Investment Plans"
          />
          <div className="life-card-content">
            <p>Investment plans</p>
            {/* <button className="card-btn">➜</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePlans;
