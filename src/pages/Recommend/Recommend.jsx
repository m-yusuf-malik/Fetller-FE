import "./Recommend.styles.css";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Button from "../../components/Button/Button";
import images from "../../assets/images";

const Recommend = () => {
  const { boyRecommend, girlRecommend } = images;

  return (
    <>
      <Header />
      <main className="recommend">
        <section className="recommend__hero fc">
          <div className="recommend__hero-texts fc">
            <h3 style={{ fontWeight: "800" }}>Get your diet-plan</h3>
            <p style={{ color: "var(--primary-text-color)" }}>
              Our powerful intelligent system will give you diet-plan for the
              next 30 days suited best for your current physique.
            </p>
            <div className="fc" style={{ marginTop: "1em", gap: "2em" }}>
              <p style={{ color: "var(--primary-text-color)" }}>
                Upload your full body picture
              </p>
              <div className="file-input-container">
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="file-input"
                  className="button"
                  style={{
                    backgroundColor: "var(--primary-bg-color)",
                    color: "var(--white-black-text-color)",
                    padding: ".75em 2em",
                  }}
                >
                  Upload
                </label>
              </div>
            </div>
          </div>
          <div className="recommend__hero-pics fc">
            <img src={girlRecommend} alt="" />
            <img src={boyRecommend} alt="" />
          </div>
        </section>
        <section className="recommend__whyus fc">
          <h3 style={{ fontWeight: "800", color: "var(--tertiary-bg-color)" }}>
            Why us
          </h3>
          <p style={{ color: "var(--tertiary-bg-color)" }}>
            Our powerful intelligent system will give you diet-plan for the next
            30 days suited best for your current physique.
          </p>
          
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Recommend;
