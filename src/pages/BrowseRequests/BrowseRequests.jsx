import React, { useState, useEffect, useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import RequestCard from "../../components/RequestCard/RequestCard";
import Input from "../../components/Input/Input";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import "./BrowseRequests.styles.css";

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
  const options = [
    { value: "", label: "None" },
    { value: "-price", label: "High to low price" },
    { value: "price", label: "Low to high price" },
    { value: "-created_at", label: "Newest" },
    { value: "created_at", label: "Oldest" },
  ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setRequestParamsUrl(`?search=${event.target.value}`);

    if (sortBy != "")
      setRequestParamsUrl(`search=${event.target.value}&ordering=${sortBy}`);
    else setRequestParamsUrl(`search=${event.target.value}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.value);

    if (search != "")
      setRequestParamsUrl(`search=${search}&ordering=${event.value}`);
    else setRequestParamsUrl(`ordering=${event.value}`);
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
          <Dropdown
            options={options}
            onChange={handleSortChange}
            value={options.find((option) => option.value === sortBy)}
            arrowClassName="browse-requests-arrow"
            controlClassName="browse-requests__drop-down-control asd"
          />
          <Input
            id="requests__search"
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
