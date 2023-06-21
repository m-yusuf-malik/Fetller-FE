import "./SectionA.styles.css";
import images from "../../../assets/images";
import Button from "../../../components/Button/Button";

const SectionA = () => {
  const { sectionALeft, sectionARight } = images;

  return (
    <section
      className="home fc"
      style={{ backgroundColor: "#F3F4F6", gap: "2.5rem" }}
    >
      <img src={sectionALeft} alt="AI" />
      <div className="fc" style={{ flexDirection: "column", gap: ".5rem" }}>
        <h4>Be the best you!</h4>
        <p style={{ textAlign: "center" }}>
          Our intelligent system will recommend the best diet for you, its up to
          you to follow now.
        </p>
        <Button
          text="Recommend"
          style={{
            color: "#DEEDFF",
            backgroundColor: "#141A2A",
            marginTop: "1rem",
          }}
        />
      </div>
      <img src={sectionARight} alt="" />
    </section>
  );
};

export default SectionA;
