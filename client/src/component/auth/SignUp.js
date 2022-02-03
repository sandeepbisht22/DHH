import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { userActions, alertActions } from "../../state/actions";
import { useSelector, useDispatch } from "react-redux";
import LoginGoogle from "./LoginGoogle";
import SignupForm from "./signup/SignupForm";
import BiggiBlankBack from "../../resources/common/BiggiBlankBacksUpdate.png";
import { Typography } from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else if (error === "invalid Email" || error === "invalid Password") {
      dispatch(alertActions.setAlert(error, "danger"));
      dispatch(userActions.clearErrors());
    }
  }, [error, isAuthenticated, navigate]);
  return (
    <div
      className="flexCenter loginPageRoot"
      style={{ backgroundImage: `url(${BiggiBlankBack})` }}
    >
      <div
        className="row justify-content-center p-3 "
        style={{ width: "100%" }}
      >
        <div
          className="col-xl-3 col-lg-4 col-md-5 border border-3  backgroundGlassFilter"
          style={{ borderRadius: "15px 0 0 15px", padding: "15px" }}
        >
          <Typography variant="h3">Welcome To HIP HOP World</Typography>
          <LoginGoogle />
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-5 border border-3"
          style={{
            background: "white",
            borderRadius: "0 15px 15px 0",
            padding: "20px",
          }}
        >
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
