import React from "react";
import { GoogleLogin } from "react-google-login";
import {} from "dotenv/config";

const LoginGoogle = () => {
  const onSuccess = (res) => {
    console.log("Login Sucess currentUSer " + res.profileObj);
  };
  const onFailure = () => {
    console.log("Login Fail");
  };
  const value = process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID;

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
