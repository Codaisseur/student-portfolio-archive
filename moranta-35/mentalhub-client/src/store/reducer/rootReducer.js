import { combineReducers } from "redux";
import user from "./userReducer";
import practician from "./practicianReducer";
import appointment from "./appointmentReducer";

export default combineReducers({
  user,
  practician,
  appointment
});
