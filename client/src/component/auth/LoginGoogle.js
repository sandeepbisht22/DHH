import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { alertActions, userActions } from "../../state/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import googleLogo from "../../resources/common/GoogleLogo.png";
var generator = require("generate-password");

const LoginGoogle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSuccess = (res) => {
    try {
      dispatch(userActions.loginViaGoogle(res.profileObj.email));
    } catch (error) {
      console.log(
        "Error while loggin in via gogle. User does not exist. Creating new user "
      );
      var password = generator.generate({
        length: 10,
        numbers: true,
      });
      const user = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        usersource: "google",
        password: password,
      };

      dispatch(userActions.signUpUser(user));
    }
  };

  const onFailure = () => {
    console.log("Login Fail");
  };
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  const value = process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID;
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else if (error === "invalid Email" || error === "invalid Password") {
      dispatch(alertActions.setAlert(error, "danger"));
      dispatch(userActions.clearErrors());
    }
  }, [error, isAuthenticated, navigate]);
  return (
    <GoogleLogin
      clientId={value}
      buttonText="Login this shit"
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          style={{ borderRadius: "10px" }}
        >
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <a href="!#" style={{ padding: "5px" }}>
              <img
                src={googleLogo}
                style={{ width: "25px", background: "white" }}
              />
            </a>
            <div style={{ marginLeft: "5px", padding: "5px" }}>
              Continue with Google
            </div>
          </div>
        </button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      className="mt-5"
      isSignedIn={true}
    ></GoogleLogin>
  );
};
export default LoginGoogle;
