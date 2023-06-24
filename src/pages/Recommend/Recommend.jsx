import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./Recommend.styles.css";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
// import Button from "../../components/Button/Button";
import images from "../../assets/images";

import AuthContext from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Recommend = () => {
  const { boyRecommend, girlRecommend } = images;
  const { authTokens, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [bodyData, setBodyData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
    // handleClick(event);
  };

  const handleClick = async () => {
    // event.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("image", selectedFile[0]);

      await axios
        .post(`${process.env.REACT_APP_DOMAIN_URL}/recommend`, formData, {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
          "Content-Type": "multipart/form-data",
        })
        .then((response) => {
          setBodyData(response.data);
          navigate("/diet-plan");
        })
        .catch((error) => {
          setErrors(error.response.data.errors);
        });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    bodyData
      ? alert(
          "Body type: " +
            bodyData.body_type +
            "\nBody Model: " +
            bodyData.body_model
        )
      : alert("Error");
  };

  return (
    <>
      <Header />
      <main className="recommend">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
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
                    name="image"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      handleFileChange(event);
                      handleClick();
                    }}
                  />
                  <label
                    htmlFor="file-input"
                    className="button"
                    style={{
                      backgroundColor: "var(--primary-bg-color)",
                      color: "var(--white-black-text-color)",
                      padding: ".75em 2em",
                    }}
                    // onChange={handleClick}
                    // onClick={() => handleClick}
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
        )}
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
