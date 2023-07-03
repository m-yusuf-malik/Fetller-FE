import "./Footer.styles.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = ({ isHomepage }) => {
  let styles = {
    footer: {
      backgroundColor: "var(--white-75-color)",
      color: "var(--black-75-color)",
      borderTop: "0.5px solid var(--black-75-color)"

    },
    names: {
      color: "var(--black-75-color)",
    },
  };

  if (isHomepage) {
    styles = {};
  }

  return (
    <footer className="fc" style={styles?.footer}>
      <div>
        <span className="footer-comapny-name" style={styles?.names}>Fettler++</span>
        <span>Copyright © 2023 Fettler++</span> <span>All rights reserved</span>
        <div
          className="fc"
          style={{
            paddingTop: "1em",
            justifyContent: "flex-start",
            gap: "2em",
          }}
        >
          <BsFacebook size="1.25em" />
          <BsInstagram size="1.25em" />
          <BsTwitter size="1.25em" />
        </div>
      </div>
      <div>
        <h5 style={{ paddingBottom: ".5em" }}>Company</h5>
        <span>Recommender</span>
        <span>Publish</span>
        <span>Publish</span>
        <span>Browse</span>
        <span>Diet-plan</span>
      </div>
      <div>
        <span>Lahore, Pakistan</span>
        <span>+923077424234</span>
        <span>contact@fettler.com</span>
      </div>
      <div>
        <h5 style={{ paddingBottom: ".5em" }}>Get updates</h5>
        <input type="text" />
      </div>
    </footer>
  );
};

export default Footer;
