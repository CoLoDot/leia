import axios from "axios";
import thunk from "redux-thunk";
import {
  USER_IS_LOADED,
  USER_IS_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from "../../actions/types";
import {
  userLoad,
  userLogin,
  userLogout,
  userRegistration
} from "../../actions/auth";

describe("Auth actions", () => {
  it("should return USER_IS_LOADED when userLoad action is rightly called", () => {});
});
