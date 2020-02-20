import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_IS_LOADED,
  USER_IS_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "./types";

export const userLoad = () => (dispatch, getState) => {
  // check user loading
  dispatch({ type: USER_IS_LOADING });
  // get token
  const token = getState().Auth.token;
  // configurate headers
  const headerConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    headerConfig.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", headerConfig)
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
