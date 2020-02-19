import axios from "axios";

import { GET_LEADERS, DELETE_LEADERS, ADD_LEADERS, GET_ERRORS } from "./types";
import { generateMessage } from "./messages";

// action get leader
export const getLeaders = () => dispatch => {
  axios
    .get("/api/leia/")
    .then(res => {
      dispatch({
        type: GET_LEADERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// action delete leader
export const deleteLeaders = id => dispatch => {
  axios
    .delete(`/api/leia/${id}/`)
    .then(res => {
      dispatch(generateMessage({ leaderDeleted: "Leader deleted !" }));
      dispatch({
        type: DELETE_LEADERS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// action add leader
export const addLeaders = leader => dispatch => {
  axios
    .post("/api/leia/", leader)
    .then(res => {
      dispatch(generateMessage({ addLeader: "new leader added !" }));
      dispatch({
        type: ADD_LEADERS,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        message: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
