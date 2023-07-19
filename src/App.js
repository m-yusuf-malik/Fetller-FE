import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Routes/PrivateRoute";
import OrderPrivateRoute from "./Routes/OrderPrivateRoute";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Recommend from "./pages/Recommend/Recommend";
import Register from "./pages/Register/Register";
import PublishRequest from "./pages/PublishRequest/PublishRequest";
import BrowseRequests from "./pages/BrowseRequests/BrowseRequests";
import DietPlan from "./pages/DietPlan/DietPlan";
import RequestDetails from "./pages/RequestDetails/RequestDetails";
import Account from "./pages/Account/Account";
import NotFound from "./pages/NotFound/NotFound";
import Order from "./pages/Order/Order";
import PublishPrivateRoute from "./Routes/PublishPrivateRoute";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import AboutUs from "./pages/AboutUs/AboutUs";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route exact path="/orders" element={<OrderPrivateRoute />}>
              <Route exact path="" element={<Order />} />
              <Route exact path="/orders/:id" element={<OrderDetails />} />
            </Route>
            <Route exact path="/requests" element={<PublishPrivateRoute />}>
              <Route exact path="publish" element={<PublishRequest />} />
            </Route>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="" element={<Homepage />} />
              <Route exact path="/recommend" element={<Recommend />} />
              <Route exact path="/diet-plan" element={<DietPlan />} />
              <Route exact path="/account" element={<Account />} />
              <Route path="/requests">
                <Route path="" element={<BrowseRequests />} />
                <Route path="/requests/:id" element={<RequestDetails />} />
              </Route>
              <Route exact path="/about-us" element={<AboutUs />} />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
