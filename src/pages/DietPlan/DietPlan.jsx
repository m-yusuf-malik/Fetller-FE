// import { Link } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
import React, { useContext } from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import DivTable from "../../components/DivTable/DivTable";
import AuthContext from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import "./DietPlan.styles.css";

const DPTableHeader = () => {
  return (
    <div className="div-table__table-header fc" style={{ border: "1px solid" }}>
      <h4>Time</h4>
      <h4>Meal</h4>
    </div>
  );
};

const DPTableRow = ({ time, meal }) => {
  return (
    <div className="div-table__table-row fc">
      <p>{time}</p>
      <p>{meal}</p>
    </div>
  );
};


const DietPlan = () => {
  let { user } = useContext(AuthContext);
  const todayMeals = [{
    time: 'Lunch',
    meal: 'sj gusin dsfbi'
  }, {
    time: 'Lunch',
    meal: 'sj gusin dsfbi'
  }, {
    time: 'Lunch',
    meal: 'sj gusin dsfbi'
  },]

  return (
    <>
      <Header />
      <main className="diet-plan fc">
        <h3 style={{ fontWeight: "800", marginBottom: "1em", width: "100%" }}>
          {user.name || user.username}'s today Diet-plan
        </h3>
        <h4 style={{ marginBottom: "1em" }}> Day: 3</h4>

        <div className="div-table__table-conatiner" >

          <DPTableHeader />
          {todayMeals.map((todayMeal) => (
            <DPTableRow

              time={todayMeal.time}
              meal={todayMeal.meal}

            />
          ))}

          <div className="fc">
            <Link to="">
              <Button
                text="View details"
                style={{
                  backgroundColor: "var(--primary-bg-color)",
                  color: "var(--white-black-text-color)",
                  padding: ".75em 2em",
                }}
              />
            </Link>
          </div>

        </div>

        <hr style={{ marginBottom: '7.5em', marginTop: '7.5em', width: '100%', border: '1px solid' }}></hr>

        <h3 style={{ fontWeight: "800", marginBottom: "2em", width: "100%" }}>
          {user.name || user.username}'s overall Diet-plan
        </h3>
        <DivTable />

      </main>
      <Footer />
    </>
  );
};

export default DietPlan;
