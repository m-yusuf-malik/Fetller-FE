import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Route, Navigate, Outlet } from "react-router-dom";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );

  // <Route
  //     {...rest}
  //     element={user ? children : <Navigate to="/login" />}
  // />
};

export default PrivateRoute;
