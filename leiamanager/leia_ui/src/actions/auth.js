import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_IS_LOADED,
  USER_IS_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from "./types";
import { configWithToken } from "./commons/params";

export const userLoad = () => (dispatch, getState) => {
  // check user loading
  dispatch({ type: USER_IS_LOADING });

  axios
    .get("/api/auth/user", configWithToken(getState))
    .then(res => {
      dispatch({
        type: USER_IS_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const userLogin = (username, password) => dispatch => {
  const headerConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const convertPayloadToJson = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", convertPayloadToJson, headerConfig)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAILED
      });
    });
};

export const userRegistration = ({ username, email, password }) => dispatch => {
  const headerConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const convertPayloadToJson = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/registration", convertPayloadToJson, headerConfig)
    .then(res => {
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTRATION_FAILED
      });
    });
};

export const userLogout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, configWithToken(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
