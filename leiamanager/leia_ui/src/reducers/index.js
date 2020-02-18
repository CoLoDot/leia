import { combineReducers } from "redux";
import LeadersList from "./LeadersListReducers";
import Errors from "./errors";

export default combineReducers({
  LeadersList,
  Errors
});
