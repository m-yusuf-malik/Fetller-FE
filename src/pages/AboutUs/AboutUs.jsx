import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

import "./AboutUs.styles.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="about-us__container fcc">
        <section className="recommend__whyus fc" style={{ width: "100%" }}>
          <h3 style={{ fontWeight: "800", color: "var(--tertiary-bg-color)" }}>
            Why us
          </h3>
          <p style={{ color: "var(--tertiary-bg-color)" }}>
            Our powerful intelligent system will give you diet-plan for the next
            30 days suited best for your current physique.
          </p>
        </section>
        <section
          className="recommend__whyus fc"
          style={{ width: "100%", background: "transparent" }}
        >
          <h3 style={{ fontWeight: "800" }}>Who are we?</h3>
          <p>We are the students of UCP at the final semester</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
