import { LOGIN_USER, REGISTER_USER } from "../types";
import { axios } from "axios";

//Register User on database
const signUpUser = async (formData) => {
  //Have  to make rest call for registering user
  const res = await axios.get("!#");
  dispatchEvent({
    type: REGISTER_USER,
    payload: res.data,
  });
};

// Login User when check with Database
const loginUser = async (formData) => {
  //Will make a rest call to check if we can login and the set token returned
  const res = await axios.get("!#");
  dispatchEvent({
    type: LOGIN_USER,
    payload: res.data,
  });
};

//Will store logged in or Signed up user
const loadUser = () => {};

export { loginUser, signUpUser, loadUser };
