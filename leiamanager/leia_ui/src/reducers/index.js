import { combineReducers } from "redux";
import LeadersList from "./LeadersListReducers";
import Errors from "./errors";
import Messages from "./messages";

export default combineReducers({
  LeadersList,
  Errors,
  Messages
});
