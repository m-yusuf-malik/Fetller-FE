import "./FeatureSection.styles.css";
import images from "../../../assets/images";
import Button from "../../../components/Button/Button";

const FeatureSection = () => {
  const { requestFeatureSection } = images;

  return (
    <section className="home fc" style={{ gap: "10em" }}>
      <div className="home__features-headings">
        <h3 style={{ color: "#BCDCFF" }}>Publish a request</h3>
        <p style={{ color: "#DEEDFF" }}>
          Need a nutrient that’s not available in your country? Worry not, just
          publish a request and get it in reasonable prices.
        </p>
        <Button
          text="Publish"
          style={{
            marginTop: "1rem",
          }}
        />
      </div>
      <img
        style={{ flex: "2", height: "50em", width: "50em" }}
        src={requestFeatureSection}
        alt="RequestFeature"
      />
    </section>
  );
};

export default FeatureSection;
