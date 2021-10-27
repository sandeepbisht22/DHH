import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import userReducer from "./userReducer";

export default combineReducers({
  artist: artistReducer,
  user: userReducer,
});
