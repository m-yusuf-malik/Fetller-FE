import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";

import "./RequestDetails.styles.css";

const RequestDetails = () => {
  const { id } = useParams();

  const { authTokens } = useContext(AuthContext);

  const [request, setRequet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const usefetchRequestDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN_URL}/requests/${id}`,
        {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
        }
      );
      const data = response.data;
      setRequet(data);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    usefetchRequestDetails();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="request-details__main fc">
          <h3>{request.title}</h3>
          <div className="request-details__container fc">
            <div className="request-details__img-container fc">
              <img src={request.image} alt="" />
            </div>
            <div className="request-details__main-texts fc">
              <div>
                <h5>Description</h5>
                <p>{request.description}</p>
              </div>

              <div>
                <h5>Destination</h5>

                <p>
                  {request.address}, {request.city}, {request.country}
                </p>
              </div>
              <div>
                <h5>Product Price</h5>
                <p>$ {request.price}</p>
              </div>
              <div>
                <h5>Estimated profit</h5>
                <p>$ {request.estimated_profit}</p>
              </div>
              <div>
                <h5>Receiver phone number</h5>
                <p>{request.phone_number}</p>
              </div>

              <Button
                text="Confirm"
                style={{
                  backgroundColor: "var(--primary-bg-color)",
                  color: "var(--white-black-text-color)",
                  marginTop: "2em",
                }}
              />
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};

export default RequestDetails;
