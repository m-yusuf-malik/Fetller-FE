import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const OrderPrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  return user.is_rider ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default OrderPrivateRoute;
