import axios from "axios";

import { GET_LEADERS } from "./types";

// action for GET_LEADERS
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
