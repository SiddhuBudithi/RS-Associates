import './Css/WhyUs.css';

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <h2>Why Choose Us?</h2>
      <p>
        We prioritize transparency, customer-first service, and financial products that fit your goals.
      </p>
      <div className="whyus-grid">
        <div className="whyus-card">
          <h3>Trusted Advisors</h3>
          <p>Decades of financial expertise at your service.</p>
        </div>
        <div className="whyus-card">
          <h3>Customer First</h3>
          <p>We listen, we advise, we care for your needs.</p>
        </div>
        <div className="whyus-card">
          <h3>Proven Track Record</h3>
          <p>Thousands of happy customers across industries.</p>
        </div>
      </div>
    </section>
  );
}
