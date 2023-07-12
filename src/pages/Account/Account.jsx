import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import Footer from '../../containers/Footer/Footer'
import Header from '../../containers/Header/Header'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import data from "../../assets/data"
import './Account.Styles.css'

const Account = () => {
    const { toastOptions } = data;

    let { user, authTokens, logoutUser } = useContext(AuthContext);

    const [userData, setUserData] = useState({ name: '', city: '', destination_country: '' });

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const updateSuccessAlert = (text) => toast.success(text, toastOptions)
    const updateSuccessNavigateAlert = (text) => toast.success(text, {
        onClose: () => logoutUser(),
        ...toastOptions
    })
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData((prevFormsData) => ({
            ...prevFormsData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `${process.env.REACT_APP_API_DOMAIN_URL}/users/${user.username}`,
                    {
                        headers: {
                            Authorization: `Bearer ${String(authTokens.access)}`,
                        },
                    }
                );
                const data = response.data;
                setUserData(data);
            } catch (error) {
                // setErrors(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [authTokens.access]);

    const handleClick = async () => {
        try {
            setErrors(null)
            setIsLoading(true);
            const formData = new FormData();

            formData.append("username", userData.username);
            formData.append("email", userData.email);
            formData.append("country", userData.country);
            formData.append("phone", userData.phone);
            formData.append("score", userData.score);

            formData.append("name", userData.name);
            formData.append("city", userData.city);
            formData.append("destination_country", userData.destination_country);

            await axios
                .patch(`${process.env.REACT_APP_API_DOMAIN_URL}/users/${user.username}`, formData,
                    {
                        headers: {
                            Authorization: `Bearer ${String(authTokens.access)}`,
                        },
                    })
                .then((response) => {
                    updateSuccessNavigateAlert("Redirectig to login...")
                })
                .catch((error) => {
                    setErrors(error.response.data.errors);
                });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };


    return (
        <>
            <Header />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <main className="account fc">
                    <ToastContainer />
                    <div className="account__blur">
                        <div className="login__left fc">
                            <h2
                                style={{ color: "var(--primary-text-color)", marginBottom: ".75em" }}
                            >
                                Account
                            </h2>
                            <div className="login__form fc">

                                <Input
                                    heading="Username"
                                    type="text"
                                    name="username"
                                    placeholder="nietz"
                                    value={userData?.username}
                                    onChange={handleChange}
                                    details={errors?.username}
                                />
                                <Input
                                    heading="Email"
                                    type="email"
                                    name="email"
                                    placeholder="nietz@fettler.com"
                                    value={userData?.email}
                                    onChange={handleChange}
                                    details={errors?.email}
                                /><Input
                                    heading="Name"
                                    type="text"
                                    name="name"
                                    placeholder="Fredrick Nietzhe"
                                    value={userData?.name}
                                    onChange={handleChange}
                                    details={errors?.name}
                                />
                                <Input
                                    heading="Destination country"
                                    type="text"
                                    placeholder="Pakistan"
                                    name="destination_country"
                                    value={userData?.destination_country}
                                    onChange={handleChange}
                                    details={errors?.destination_country}
                                />
                                <Input
                                    heading="Country"
                                    type="text"
                                    placeholder="Norway"
                                    name="country"
                                    value={userData?.country}
                                    onChange={handleChange}
                                    details={errors?.country}
                                />
                                <Input
                                    heading="City"
                                    type="text"
                                    placeholder="Oslo"
                                    name="city"
                                    value={userData?.city}
                                    onChange={handleChange}
                                    details={errors?.city}
                                />
                                <Input
                                    heading="Phone number"
                                    type="text"
                                    placeholder="+4781632900"
                                    name="phone"
                                    value={userData?.phone}
                                    onChange={handleChange}
                                    details={errors?.phone}
                                />
                                <Input
                                    heading="Score"
                                    type="text"
                                    placeholder=""
                                    name="score"
                                    value={userData?.score}
                                    onChange={handleChange}
                                    details={errors?.score}
                                    disabled
                                />
                                <div className="input-field fc" style={{ flexDirection: 'row', gap: '1.5rem', fontSize: '1.5rem' }}>
                                    <h6>Batch: </h6>
                                    <AiFillStar color="gold" />
                                </div>
                                <Button
                                    text="Update"
                                    style={{
                                        backgroundColor: "var(--primary-bg-color)",
                                        color: "var(--white-black-text-color)",
                                        marginTop: "1.5rem",
                                    }}
                                    onClick={handleClick}
                                />

                            </div>
                        </div>
                    </div>
                </main>
            )
            }
            <Footer />
        </>
    )
}

export default Account