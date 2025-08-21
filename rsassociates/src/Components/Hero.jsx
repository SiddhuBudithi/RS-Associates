import "./Css/Hero.css";
import { Link } from "react-router-dom";
import image01 from "../images/TataAia.jpg";
import image02 from "../images/TataAig.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Your Trusted Financial Partner</h1>
        <p>Insurance • Loans • Investments</p>
        <Link to="/contact" className="btn">Get Started</Link>

        {/* Partner Section */}
        <div className="partners">
          <p className="partners-text">Authorised Partner of</p>
          <div className="partners-logos">
            <img
              src={image01} 
              alt="TATA Insurance"
            />
            <img
              src={image02}
              alt="Insurance Partner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
