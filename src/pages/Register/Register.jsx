import "./Register.styles.css";

import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <div className="login fc">
      <div className="login__company fc">
        <h2 style={{ color: "#F3F4F6" }}>Fettler++</h2>
        <h5 style={{ color: "#F3F4F6D0" }}>
          We want you to be the best{" "}
          <span style={{ color: "var(--secondary-bg-color)" }}>YOU</span>!
        </h5>
      </div>
      <div className="login__left fc">
        <h2
          style={{ color: "var(--primary-text-color)", marginBottom: ".75em" }}
        >
          Register
        </h2>
        <div className="login__form fc">
          <Input
            heading="Username"
            type="text"
            name="username"
            placeholder="nietz"
            details=""
          />{" "}
          <Input
            heading="Email"
            type="email"
            name="email"
            placeholder="nietz@fettler.com"
            details=""
          />
          <Input
            heading="Password"
            type="password"
            placeholder="*********"
            name="password"
            details=""
          />
          <Input
            heading="Country"
            type="text"
            placeholder="Norway"
            name="country"
            details=""
          />
          <Input
            heading="Phone number"
            type="text"
            placeholder="+4781632900"
            name="phone_number"
            details=""
          />
          <p style={{ fontSize: ".75em", marginTop: "-.6em" }}>
            Already have an account?
            <span
              style={{ color: "var(--secondary-bg-color)", fontWeight: "800" }}
            >
              <Link to="/login"> Login</Link>
            </span>
          </p>
          <Button
            text="Register"
            style={{
              backgroundColor: "var(--primary-bg-color)",
              color: "var(--white-black-text-color)",
              marginTop: "1.25em",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
