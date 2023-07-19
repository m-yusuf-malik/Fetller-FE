import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";

import AuthContext from "../../context/AuthContext";
import data from "../../assets/data";

import "./Header.styles.css";

const HeaderNav = ({ styles }) => {
  let { user } = useContext(AuthContext);

  return (
    <div className="fc header-bottom" style={styles?.borders}>
      <Link to="/recommend">Recommender</Link>
      <Link to="/diet-plan">Diet-plan</Link>
      <Link to="/requests">Browse</Link>
      {!user.is_rider && <Link to="/requests/publish">Publish</Link>}
      {user.is_rider && <Link to="/orders">Order</Link>}
      <Link to="/about-us">About Us</Link>
    </div>
  );
};

const Header = ({ isHomepage }) => {
  let { user, logoutUser, authTokens } = useContext(AuthContext);
  const { batch_images } = data;

  const [userBatch, setUserBatch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN_URL}/users/${user.username}/batch`,
          {
            headers: {
              Authorization: `Bearer ${String(authTokens.access)}`,
            },
          }
        );
        const data = response.data;
        setUserBatch(data.batch_name);
      } catch (error) {
        // setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [authTokens.access]);

  let styles = {
    header: {
      backgroundColor: "var(--white-75-color)",
      color: "var(--black-75-color)",
    },
    borders: {
      borderBottom: "0.5px solid var(--black-75-color)",
    },
  };

  if (isHomepage) {
    styles = {};
  }

  return (
    <header style={styles?.header}>
      <div className="fc header-upper" style={styles?.borders}>
        <Link to="/requests/#requests__search" className="fc" style={{ flex: "1" , justifyContent:'flex-start'}}>
          <AiOutlineSearch size={"1.25em"} />
        </Link>
        <Link to="/" style={{ flexGrow: "1", justifyContent: "center" }}>
          <h5 className="header-h5">Fettler++</h5>
        </Link>
        {user ? (
          <div className="header-account fc">
            <Link
              to="/account"
              className="fc header-account"
              style={{ marginRight: ".75rem" }}
            >
              <span>{user?.name || user?.username}</span>
              <FaUser size="1.25em" />
              <img
                src={batch_images[userBatch]}
                className="header__batch"
                alt=""
              />
            </Link>
            <HiLogout onClick={logoutUser} />
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>

      <HeaderNav styles={styles} />
    </header>
  );
};

export default Header;
