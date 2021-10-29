import React from "react";
import { GoogleLogout } from "react-google-login";
const LogoutGoogle = () => {
  const logoutSucess = () => {
    console.log("logout Sucesss");
  };
  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID}
        buttonText="Plug Off"
        onLogoutSuccess={logoutSucess}
      ></GoogleLogout>
    </div>
  );
};

export default LogoutGoogle;
