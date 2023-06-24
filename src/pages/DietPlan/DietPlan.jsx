import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import DivTable from "../../components/DivTable/DivTable";
import AuthContext from "../../context/AuthContext";

import "./DietPlan.styles.css";

const DietPlan = () => {
  let { authTokens, logoutUser, user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main className="diet-plan fc">
        <h3 style={{ fontWeight: "800", marginBottom: "2em", width: "100%" }}>
          {user.name || user.username}'s Diet-plan
        </h3>
        <DivTable />
      </main>
      <Footer />
    </>
  );
};

export default DietPlan;
