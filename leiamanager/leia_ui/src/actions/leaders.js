import axios from "axios";

import { GET_LEADERS, DELETE_LEADERS } from "./types";

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
      dispatch({
        type: DELETE_LEADERS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
