import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./BrowseRequests.styles.css";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import RequestCard from "../../components/RequestCard/RequestCard";
import AuthContext from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Requests = () => {
  const { authTokens, user } = useContext(AuthContext);

  const [requests, setRequets] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const usefetchAllRequests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_DOMAIN_URL}/requests`,
        {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
        }
      );
      const data = response.data;
      setRequets(data);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    usefetchAllRequests();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="fc requests-container">
          {requests &&
            requests.map((request, index) => (
              <RequestCard key={index} {...request} />
            ))}
        </div>
      )}
    </>
  );
};

const BrowseRequests = () => {
  return (
    <>
      <Header />

      <main className="browse-requests fc">
        <h3>Nutrients Requests</h3>
        <div
          className="fc"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <select name="" id="">
            <option value="">Sort by</option>
            <option value="">New</option>
            <option value="">Price</option>
          </select>
          <input type="search" />
        </div>
        <Requests />
      </main>

      <Footer />
    </>
  );
};

export default BrowseRequests;
