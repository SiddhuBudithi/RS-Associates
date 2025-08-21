// import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import WhyUs from "../Components/WhyUs";
// import Contact from "../Components/Contact";
import Process from "../Components/Process";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
// import Footer from "../Components/Footer";
import InsurancePlans from "../Components/InsurancePlans";

export default function Homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <section id="hero">
        <Hero />
      </section>
      <section id="insurance-plans">
        <InsurancePlans />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="whyus">
        <WhyUs />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      {/* <section id="contact"><Contact /></section> */}
      {/* <Footer /> */}
    </>
  );
}
