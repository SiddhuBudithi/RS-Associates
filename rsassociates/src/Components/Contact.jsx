import { useState } from "react";
import "./Css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://backend-rsa.onrender.com/contact", {
      // const res = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); 

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", place: "", subject: "" });
      } else {
        setMessage(`❌ Failed: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage("❌ Could not send message. Try again later.");
    }

    setLoading(false);
  };

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
            <p><span className="icon">📞</span> +91 9143364777</p>
            <p><span className="icon">📧</span> info@rsassociates.online</p>
            <p className="address">
              Shop No. 5, Sri Sai Ambica Towers, NH 5, Opposite Sri Chaitanya
              Techno School, Tanuku 534211
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send a Message"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
}
