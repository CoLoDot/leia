import { combineReducers } from "redux";
import LeadersList from "./LeadersListReducers";
import Errors from "./errors";
import Messages from "./messages";
import Auth from "./auth";

export default combineReducers({
  LeadersList,
  Errors,
  Messages,
  Auth
});
