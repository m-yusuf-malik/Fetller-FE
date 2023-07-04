import "./Header.styles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";

const HeaderNav = ({ styles }) => {
  return (
    <div className="fc header-bottom" style={styles?.borders}>
      <Link to="/recommend">Recommender</Link>
      <Link to="/diet-plan">Diet-plan</Link>
      <Link to="/requests">Browse</Link>
      <Link to="/requests/publish">Publish</Link>
      <Link to="/recommend">About Us</Link>
    </div>
  );
};

const Header = ({ isHomepage }) => {
  let { user, logoutUser } = useContext(AuthContext);

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
        <Link to="/" style={{ flex: "1" }}>
          <AiOutlineSearch size={"1.25em"} />
        </Link>
        <Link to="/" style={{ flexGrow: "1", justifyContent: "center" }}>
          <h5 className="header-h5">Fettler++</h5>
        </Link>
        {user ? (
          <div className="header-account fc">
            <Link to='/account' className="fc header-account">
              <span>{user?.name || user?.username}</span>
              <FaUser size="1.25em" />
              <AiFillStar color="gold" />
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
