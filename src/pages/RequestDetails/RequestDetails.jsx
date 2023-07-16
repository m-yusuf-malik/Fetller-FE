import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";

import data from "../../assets/data";
import images from "../../assets/images";

import "./RequestDetails.styles.css";

const RequestDetails = () => {
  const { toastOptions } = data;
  const { defaultRequest } = images;

  const { id: request_id } = useParams();
  const navigate = useNavigate();

  const { authTokens } = useContext(AuthContext);

  const [request, setRequet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const updateSuccessNavigateAlert = (text) =>
    toast.success(text, {
      onClose: () => navigate("/"),
      ...toastOptions,
    });

  useEffect(() => {
    const usefetchRequestDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN_URL}/requests/${request_id}`,
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

    usefetchRequestDetails();
  }, []);

  const confirmOrder = async () => {
    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.REACT_APP_API_DOMAIN_URL}/orders`,
        { request_id: request_id },
        {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
        }
      );
      updateSuccessNavigateAlert("Order confirmed.");

      // navigate("/");
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="request-details__main fc">
          <ToastContainer />

          <h3>{request.title}</h3>
          <div className="request-details__container fc">
            <div className="request-details__img-container fc">
              {request?.image ? (
                <img src={request.image} alt={request.title} />
              ) : (
                <img src={defaultRequest} alt="default" />
              )}
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
                onClick={confirmOrder}
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
