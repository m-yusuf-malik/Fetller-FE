import "./App.css";
import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Recommend from "./pages/Recommend/Recommend";
import Register from "./pages/Register/Register";
import PublishRequest from "./pages/PublishRequest/PublishRequest";
import BrowseRequests from "./pages/BrowseRequests/BrowseRequests";
import DietPlan from "./pages/DietPlan/DietPlan";
import RequestDetails from "./pages/RequestDetails/RequestDetails";
import Account from "./pages/Account/Account";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="" element={<Homepage />} />
              <Route exact path="/recommend" element={<Recommend />} />
              <Route exact path="/diet-plan" element={<DietPlan />} />
              <Route exact path="/account" element={<Account />} />
              <Route path="/requests">
                <Route path="publish" element={<PublishRequest />} />
                <Route path="" element={<BrowseRequests />} />
                <Route path="/requests/:id" element={<RequestDetails />} />
              </Route>
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route path="*" element={<h1 className="fc">Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
