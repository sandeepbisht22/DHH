import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { userActions } from "../../state/actions";

const LogoutGoogle = () => {
  const dispatch = useDispatch();
  const logoutSucess = () => {
    console.log("logout Sucesss");
    dispatch(userActions.logoutUser());
  };
  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_O_AUTH_CLIENT_ID}
        buttonText="Plug Off"
        onLogoutSuccess={logoutSucess}
        onFailure={logoutSucess}
      ></GoogleLogout>
    </div>
  );
};

export default LogoutGoogle;
