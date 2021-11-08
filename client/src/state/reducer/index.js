import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import userChoiceReducer from "./userChoiceReducer";
export default combineReducers({
  artist: artistReducer,
  user: userReducer,
  alerts: alertReducer,
  userChoice: userChoiceReducer,
});
