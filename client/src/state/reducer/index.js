import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  artist: artistReducer,
  user: userReducer,
  alerts: alertReducer,
});
