import axios from "axios";

import { GET_LEADERS, DELETE_LEADERS, ADD_LEADERS } from "./types";
import { generateMessage, returnErrors } from "./messages";
import { configWithToken } from "./commons/params";

// action get leader
export const getLeaders = () => (dispatch, getState) => {
  return axios
    .get("/api/leia/", configWithToken(getState))
    .then(res => {
      dispatch({
        type: GET_LEADERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// action delete leader
export const deleteLeaders = id => (dispatch, getState) => {
  return axios
    .delete(`/api/leia/${id}/`, configWithToken(getState))
    .then(res => {
      dispatch(generateMessage({ leaderDeleted: "Leader deleted !" }));
      dispatch({
        type: DELETE_LEADERS,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// action add leader
export const addLeaders = leader => (dispatch, getState) => {
  return axios
    .post("/api/leia/", leader, configWithToken(getState))
    .then(res => {
      dispatch(generateMessage({ addLeader: "new leader added !" }));
      dispatch({
        type: ADD_LEADERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
