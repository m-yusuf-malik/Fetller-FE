import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Hero from "./Hero/Hero";
import SectionA from "./SectionA/SectionA";

const Homepage = () => {
  //   let [notes, setNotes] = useState([]);
  //   let { authTokens, logoutUser } = useContext(AuthContext);

  //   useEffect(() => {
  //     getNotes();
  //   }, []);

  //   let getNotes = async () => {
  //     let response = await fetch("http://127.0.0.1:8000/api/notes/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + String(authTokens.access),
  //       },
  //     });
  //     let data = await response.json();

  //     if (response.status === 200) {
  //       setNotes(data);
  //     } else if (response.statusText === "Unauthorized") {
  //       logoutUser();
  //     }
  //   };

  return (
    <div>
      <Hero />
      <SectionA />
    </div>
  );
};

export default Homepage;
