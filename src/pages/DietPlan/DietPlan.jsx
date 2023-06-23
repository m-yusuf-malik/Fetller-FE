import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Button from "../../components/Button/Button";
import AuthContext from "../../context/AuthContext";

import "./DietPlan.styles.css";

const DPTableHeader = () => {
  return (
    <div className="diet-plan__table-header fc" style={{ border: "1px solid" }}>
      <h4>Day</h4>
      <h4>Breakfast</h4>
      <h4>Lunch</h4>
      <h4>Dinner</h4>
      <h4></h4>
    </div>
  );
};

const DPTableRow = () => {
  return (
    <div className="diet-plan__table-row fc">
      <p>Day</p>
      <p>Breakfast</p>
      <p>
        Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken
        breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies (2
        tablespoons onion, 1/4 cup diced zucchini, 1/2 cup bell pepper), 1
        teaspoon chopped cilantro, and 1 tablespoon low-fat vinaigrette.
      </p>
      <p>Dinner</p>
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
  );
};

const DPTableBody = () => {
  return (
    <div>
      <DPTableRow />
      <DPTableRow />
      <DPTableRow />
    </div>
  );
};

const DietPlan = () => {
  let { authTokens, logoutUser, user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main className="diet-plan fc">
        <h3 style={{ fontWeight: "800", marginBottom: "2em", width: "100%" }}>
          {user.name || user.username}'s Diet-plan
        </h3>
        <div className="diet-plan__table-conatiner">
          <DPTableHeader />
          <DPTableBody />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DietPlan;
