import "./Hero.styles.css";
import images from "../../../assets/images";
import Button from "../../../components/Button/Button";

const Hero = () => {
  const heroImg = images.heroImg;

  return (
    <section className="home fc">
      <div className="hero__texts">
        <h2>A diet plan made only for you</h2>
        <p style={{ color: "#DEEDFF" }}>
          We always want to stay fit and healthy and we should be as it is a key
          part in solving the puzzle of living a happy life. Taking an adequate
          diet can be consider a major factor for achieving this.
        </p>
        <div className="fc hero__buttons">
          <Button text="Get Started" />
          <Button
            text="View Requests"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #BCDCFF",
              color: "#BCDCFF",
            }}
          />
        </div>
      </div>
      <div>
        <img src={heroImg} width="500px" height="300px" alt="" />
      </div>
    </section>
  );
};

export default Hero;
