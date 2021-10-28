import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, LOAD_USER } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
