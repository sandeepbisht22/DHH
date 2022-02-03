import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userActions, alertActions } from "../../state/actions";
import loginArtist from "../../resources/images/LoginArtist.jpg";
import LoginGoogle from "./LoginGoogle";
import LoginForm from "./login/LoginForm";
import spinner from "../../resources/common/spinner.gif";
import LoginBackground1 from "../../resources/common/LoginBackground1.jpg";
import LoginBackground from "../../resources/common/LoginBackground.jpg";
import hipHopHand from "../../resources/common/hipHop.png";
import tupacBack from "../../resources/common/tupac.png";

import { Button, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userSignUp = () => {
    navigate("/signup");
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error !== null) {
      dispatch(alertActions.setAlert(error, "danger"));
      dispatch(userActions.clearErrors());
    }
  }, [error, isAuthenticated, navigate]);
  return (
    <div
      style={{ backgroundImage: `url(${tupacBack})` }}
      className="flexCenter loginPageRoot"
    >
      <div className="row justify-content-center p-3" style={{ width: "100%" }}>
        <div
          className="col-xl-3 col-lg-4 col-md-5 border border-3  backgroundGlassFilter"
          style={{ borderRadius: "15px 0 0 15px", padding: "15px" }}
        >
          <Typography variant="h3" className="centerAlignText">
            Welcome Back
          </Typography>
          <Typography variant="h5" className="centerAlignText">
            HIP HOP Heads
          </Typography>
          <hr className="hrLoginText" />
          <div className="flexCenter">
            <div style={{ width: "200px" }}>
              <img
                src={hipHopHand}
                style={{ width: "100%", display: "block", margin: "auto" }}
              />
            </div>
          </div>
          <div className="mt-4">
            <h4>New to DHH Hood ?</h4>
            <Button onClick={userSignUp}>
              <Typography variant="subtitle1">Sign Up</Typography>
            </Button>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-5 border border-3"
          style={{
            background: "white",
            borderRadius: "0 15px 15px 0",
            padding: "20px",
          }}
        >
          <h2 className="text-center">Log In</h2>
          <LoginForm />
          <div className="flexCenter">
            <hr className="hrLogin" />
            <h6 className="text-center">OR</h6>
            <hr className="hrLogin" />
          </div>

          <div className="row">
            <div className="flexCenter" style={{ padding: "15px" }}>
              <LoginGoogle />
            </div>
          </div>
          <hr />
          <div>Explore the World of DHH with us !!!</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
