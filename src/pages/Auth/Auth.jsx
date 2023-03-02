import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import RGPVLOGO from "../../img/RGPVLOGO.jpeg";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setconfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (data.password !== data.confirmpass && data.password !== "") {
        setconfirmPass(false);
      } else {
        setconfirmPass(true);
        navigate("/Home");
      }
    } else {
      navigate("/Home");
    }
  };

  const resetForm = () => {
    setconfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        {/* Left Side */}
        {/* <img src={Logo} alt="" /> */}
        <img src={RGPVLOGO} alt="" />
        <div className="Webname">
          <h1>UIT RGPV Alumni</h1>

          <hr />
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3> {isSignup ? "Sign Up" : "Log In"}</h3>

          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="Enrollment Number"
              placeholder="Enrollment Number"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            * Confirm Password is not same.
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignup(!isSignup);
                resetForm();
              }}
            >
              {isSignup
                ? "Already have an account. Login!"
                : "Don't have an Account ? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignup ? "SignUp" : "LogIn"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
