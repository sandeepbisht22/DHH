import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  SIGNUP_FAIL,
  LOAD_USER,
  LOGOUT_USER,
  AUTH_FAIL,
  CLEAR_ERROR,
} from "../types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthnToken";

//Will store logged in or Signed up user
export const loadUser = async () => async (dispatch) => {
  console.log("load User is called");
  setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/user");
    dispatchEvent({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    //TODO
    dispatch({
      type: AUTH_FAIL,
      payload: error.response.data.msg,
    });
  }
};

//Register User on database
export const signUpUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    //Have  to make rest call for registering user
    const res = await axios.post("/user", formData, config);
    console.log("Sign up res.data " + res.data);

    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (errors) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: errors.response.data.msg,
    });
  }
};

// Login User when check with Database
export const loginUser = (formData) => async (dispatch) => {
  console.log("login user is called");

  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    //Will make a rest call to check if we can login and the set token returned
    const res = await axios.post("/auth", formData, config);
    console.log("Login res.data " + res.data);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (errors) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: errors.response.data.msg,
    });
  }
};

//Logout USer
export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

//Clear all errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
