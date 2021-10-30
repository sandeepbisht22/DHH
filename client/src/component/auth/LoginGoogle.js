import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { userActions } from "../../state/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
var generator = require("generate-password");

const LoginGoogle = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Sucess currentUSer " + JSON.stringify(res));
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
  };

  const onFailure = () => {
    console.log("Login Fail");
  };
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  const value = process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID;
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    } else if (error === "invalid Email" || error === "invalid Password") {
      //setAlert(error, "danger");
      //        clearErrors();
    }
  }, [error, isAuthenticated, history]);
  return (
    <div className="pb-5">
      <GoogleLogin
        // clientId={process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID}
        clientId={value}
        buttonText="Login this shit"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        className="mt-5"
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
};
export default LoginGoogle;
