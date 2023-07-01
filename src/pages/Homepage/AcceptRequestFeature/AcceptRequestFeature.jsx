import images from "../../../assets/images";
import Button from "../../../components/Button/Button";

const AcceptRequestFeature = () => {
  const { acceptRequestFeature } = images;

  return (
    <section
      className="home fc"
      style={{ gap: "10em", backgroundColor: "#F3F4F6" }}
    >
      <img
        style={{ flex: "2", height: "60em", width: "40em" }}
        src={acceptRequestFeature}
        alt="RequestFeature"
      />
      <div className="home__features-headings">
        <h3 style={{ color: "#202533" }}>Publish a request</h3>
        <p>
          Need a nutrient that’s not available in your country? Worry not, just
          publish a request and get it in reasonable prices.
        </p>
        <Button
          text="Publish"
          style={{
            marginTop: "1rem",
            backgroundColor: "transparent",
            // border: "1px solid #BCDCFF",
            color: "var(--black-text-color)",
            border: "1px solid var(--black-text-color)",
          }}
        />
      </div>
    </section>
  );
};

export default AcceptRequestFeature;
