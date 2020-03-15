import { combineReducers } from "redux";
import LeadersList from "./LeadersListReducers";
import Errors from "./errors";
import Messages from "./messages";
import Auth from "./auth";
import Taxon from "./taxon";

export default combineReducers({
  LeadersList,
  Errors,
  Messages,
  Auth,
  Taxon
});
