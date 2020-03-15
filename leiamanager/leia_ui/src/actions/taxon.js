import axios from "axios";
import { GET_TAXON } from "./types";
import { returnErrors } from "./messages";

export const getTaxon = () => dispatch => {
  return axios
    .get("/api/taxon/")
    .then(res => {
      dispatch({
        type: GET_TAXON,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
