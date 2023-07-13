import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./BrowseRequests.styles.css";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import RequestCard from "../../components/RequestCard/RequestCard";
import Input from "../../components/Input/Input";
import AuthContext from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Requests = ({ paramsUrl }) => {
  const { authTokens, user } = useContext(AuthContext);

  const [requests, setRequets] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const usefetchAllRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN_URL}/requests?country=${user.destination_country}&${paramsUrl}`,
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

    usefetchAllRequests();
  }, [paramsUrl]);

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
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [requestParamsUrl, setRequestParamsUrl] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setRequestParamsUrl(`?search=${event.target.value}`);

    if (sortBy != "")
      setRequestParamsUrl(`search=${event.target.value}&ordering=${sortBy}`);
    else setRequestParamsUrl(`search=${event.target.value}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);

    if (search != "")
      setRequestParamsUrl(`search=${search}&ordering=${event.target.value}`);
    else setRequestParamsUrl(`ordering=${event.target.value}`);
  };

  return (
    <>
      <Header />

      <main className="browse-requests fc">
        <h3>Nutrients Requests</h3>
        <div
          className="fc"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="-created_at">Newest</option>
            <option value="created_at">Oldest</option>
            <option value="price">Low to high Price</option>
            <option value="-price">High to low Price</option>
          </select>
          <Input
            type="search"
            placeholder="Search"
            name="password"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <Requests paramsUrl={requestParamsUrl} />
      </main>

      <Footer />
    </>
  );
};

export default BrowseRequests;
