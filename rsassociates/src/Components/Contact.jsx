import "./Css/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h4 className="contact-subtitle"> CONTACT US </h4>
          <h2 className="contact-title">
            Feel free to get in touch with experts
          </h2>

          <div className="contact-details">
            <p>
              <span className="icon">📞</span> +91 9143364777
            </p>
            <p>
              <span className="icon">📧</span> info@rsassociates.online
            </p>
            <p className="address">
              Shop No. 5, Sri Sai Ambica Towers, NH 5, Opposite Sri chaitanya
              Techno School, Tanuku 534211
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Place" />
          </div>
          <textarea placeholder="Subject"></textarea>
          <button type="submit">Send a Message</button>
        </form>
      </div>
    </section>
  );
}
