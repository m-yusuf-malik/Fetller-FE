import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

import "./PublishRequest.styles.css";

const PublishRequest = () => {
  const navigate = useNavigate();
  const { authTokens, user } = useContext(AuthContext);

  const [formsData, setFormsData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
    price: "",
    estimated_profit: "",
    phone_number: "",
  });
  // const [errorDetails, setErrorDetails] = useState({
  // });

  const [selectedFile, setSelectedFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormsData((prevFormsData) => ({
      ...prevFormsData,
      [name]: value,
    }));
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("title", formsData.title);
      formData.append("description", formsData.description);
      formData.append("address", formsData.address);
      formData.append("city", formsData.city);
      formData.append("country", formsData.country);
      formData.append("phone_number", formsData.phone_number);
      formData.append("price", formsData.price);
      if (selectedFile) formData.append("image", selectedFile[0]);

      axios
        .post(`${process.env.REACT_APP_API_DOMAIN_URL}/requests`, formData, {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
        })
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          setErrors(error.response.data.errors);
        });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="publish-request fc">
          <h2
            style={{ color: "var(--primary-text-color)", marginBottom: "5rem" }}
          >
            Publish Request
          </h2>
          <div className="login__form fc">
            <Input
              heading="title"
              type="text"
              name="title"
              placeholder="VITA-FIT Sinus Nutrient"
              value={formsData.title}
              onChange={handleChange}
              details={errors?.title}
            />
            <div className="input-field fc">
              {<h6>Description</h6>}
              <textarea
                name="description"
                placeholder="Sinus Nutrient is a high potency formula containing various herbs
            and nutrients that help support healthy sinus function. As an ideal
            supplement during seasonal change, these ingredients also support a
            normal immune system and the body's natural defence mechanisms
            against allergens."
                style={{ height: "8.5em" }}
                value={formsData.description}
                onChange={handleChange}
              ></textarea>
              {errors?.description && <span>{errors?.description}</span>}

            </div>
            <Input
              heading="Address"
              type="text"
              name="address"
              placeholder="House # 23, Street # 76"
              value={formsData.address}
              onChange={handleChange}
              details={errors?.address}
            />
            <Input
              heading="City"
              type="text"
              name="city"
              placeholder="Oslo"
              value={formsData.city}
              onChange={handleChange}
              details={errors?.city}
            />
            <Input
              heading="Country"
              type="text"
              name="country"
              placeholder="Norway"
              value={formsData.country}
              onChange={handleChange}
              details={errors?.country}
            />
            <Input
              heading="Phone number"
              type="text"
              name="phone_number"
              placeholder="+4781632900"
              value={formsData.phone_number}
              onChange={handleChange}
              details={errors?.phone_number}
            />
            <Input
              heading="Price"
              type="text"
              name="price"
              placeholder="$ 120"
              value={formsData.price}
              onChange={handleChange}
              details={errors?.price}
            />
            <div className="file-input-container">
              <span style={{ marginRight: "1em" }}>Upload image</span>
              <input
                onChange={handleFileChange}
                id="file-input"
                name="image"
                type="file"
                style={{ display: "none" }}
              />
              <label
                htmlFor="file-input"
                className="button"
                style={{
                  backgroundColor: "var(--tertiary-bg-color)",
                  color: "var(--black-text-color)",
                  padding: ".75em 2em",
                }}
              >
                Upload
              </label>
            </div>
            <Button
              text="Publish"
              style={{
                backgroundColor: "var(--primary-bg-color)",
                color: "var(--white-black-text-color)",
                marginTop: "3rem",
              }}
              onClick={handleClick}
            />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};

export default PublishRequest;
