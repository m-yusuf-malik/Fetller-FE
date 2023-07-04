import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";

import AuthContext from "../../context/AuthContext";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

import DivTable from "../../components/DivTable/DivTable";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";
import CenterText from "../../components/CenterText/CenterText";

import "./DietPlan.styles.css";
import images from "../../assets/images";
import data from "../../assets/data"
// const DPTableHeader = () => {
//   return (
//     <div className="div-table__table-header fc" style={{ border: "1px solid" }}>
//       <h4>Time</h4>
//       <h4>Meal</h4>
//     </div>
//   );
// };

const DPTableRow = ({ time, meal }) => {
  return (
    <div className="div-table__table-row fc" style={{ padding: "1.5em" }}>
      <h5 style={{ flex: "1" }}>{time}</h5>
      <p
        style={{
          flex: "2",
          textAlign: "start",
        }}
      >
        {meal}
      </p>
    </div>
  );
};

const DietPlan = () => {
  let { user, authTokens } = useContext(AuthContext);

  const { dietBG } = images
  const { toastOptions } = data;

  const [todayMeals, setTodayMeals] = useState();
  const [schedule, setSchedule] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [errors, setErrors] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [updateErrors, setUpdateErrors] = useState(null);
  const navigate = useNavigate();

  const updateErrorAlert = (text) => toast.error(text, toastOptions)
  const updateSuccessAlert = (text) => toast.success(text, toastOptions)
  const updateSuccessNavigateAlert = (text) => toast.success(text, {
    onClose: () => navigate("/"),
    ...toastOptions
  })
  const updateErrorNavigateAlert = (text) => toast.error(text, {
    onClose: () => navigate("/"),
    ...toastOptions
  })

  useEffect(() => {
    const fetchCurrentDiet = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN_URL}/diet-plan`,
          {
            headers: {
              Authorization: `Bearer ${String(authTokens.access)}`,
            },
          }
        );
        const data = response.data;
        setTodayMeals(data.diet);
        setSchedule(data.schedule);
      } catch (error) {
        // setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentDiet();
  }, [updateData, authTokens.access]);

  const updateDiet = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `${process.env.REACT_APP_API_DOMAIN_URL}/diet-plan`, {},
        {
          headers: {
            Authorization: `Bearer ${String(authTokens.access)}`,
          },
        }
      );
      updateSuccessAlert("Succesfully updated")

      if (response.status === 202) updateSuccessNavigateAlert(response.data?.message)

      setUpdateData(response.data)

    } catch (error) {

      if (error?.response?.status === 410) updateErrorNavigateAlert(error?.response?.data?.error)
      else {
        updateErrorAlert(error?.response?.data?.error)
        setUpdateErrors(error?.response?.data?.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        !todayMeals ?
          <CenterText text='Get a diet-plan to view one' buttonText='Recommend' buttonURL='/recommend' />
          :
          <main className="diet-plan fc">
            <div className="diet-plan__blur">

              <h3 style={{ fontWeight: "800", marginBottom: "1em", width: "100%" }}>
                {user.name || user.username}'s today Diet-plan
              </h3>
              <div className="fc" style={{ width: "100%" }}>
                <h4 style={{ marginBottom: "1em" }}>
                  Day: {schedule && schedule.current_day}
                </h4>
                <h5
                  style={{
                    marginBottom: "1em",
                    marginLeft: "auto",
                    color: "var(--secondary-bg-color)",
                  }}
                >
                  {schedule?.critical_day !== 0 && ("Critical day: " + schedule.critical_day)}
                </h5>
              </div>


              <div className="div-table__table-conatiner">
                <hr
                  style={{
                    marginBottom: ".5em",
                    marginTop: ".5em",
                    width: "100%",
                    border: "1px solid",
                  }}
                ></hr>

                {todayMeals &&
                  todayMeals.map((todayMeal, index) => (
                    <DPTableRow key={index} time={todayMeal.time} meal={todayMeal.meal} />
                  ))}

                <div className="fc" style={{
                  marginTop: "1em",
                }}>
                  <Button
                    text="Taken"
                    style={{
                      backgroundColor: "var(--primary-bg-color)",
                      color: "var(--white-black-text-color)",
                      padding: ".75em 2em",
                    }}
                    onClick={updateDiet}
                  />
                </div>
              </div>


              <hr
                style={{
                  marginBottom: "7.5em",
                  marginTop: "2.5em",
                  width: "100%",
                  border: "1px solid",
                }}
              ></hr>

              <h3 style={{ fontWeight: "800", marginBottom: "2em", width: "100%" }}>
                Next 3 days Diet-plan
              </h3>
              <DivTable />
            </div>

          </main>
      )}
      <ToastContainer />

      <Footer />
    </>
  );
};

export default DietPlan;
