import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";

import "./DivTable.styles.css";

const DPTableHeader = () => {
  return (
    <div className="div-table__table-header fc" style={{ border: "1px solid" }}>
      <h4 style={{ flex: '1' }}>Day</h4>
      <h4>Breakfast</h4>
      <h4>Lunch</h4>
      <h4>Dinner</h4>
    </div>
  );
};

const DPTableRow = ({ day, Breakfast, Lunch, Dinner }) => {
  return (
    <div className="div-table__table-row fc">
      <p style={{ flex: '1' }}>{day}</p>
      <p>{Breakfast}</p>
      <p>
        {Lunch}
      </p>
      <p>{Dinner}</p>
    </div>
  );
};

const DivTable = () => {
  let { authTokens } = useContext(AuthContext);

  const [meals, setMeals] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN_URL}/diet-plans`,
          {
            headers: {
              Authorization: `Bearer ${String(authTokens.access)}`,
            },
          }
        );
        setMeals(response.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiets();

  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="div-table__table-conatiner">
          <DPTableHeader />
          {meals && meals.map((meal, index) => (
            <DPTableRow key={index} {...meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default DivTable;
