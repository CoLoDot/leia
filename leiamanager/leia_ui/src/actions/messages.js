import { GENERATE_LEADER_MSG, GET_ERRORS } from "./types";

// Add leader message
export const generateMessage = message => {
  return {
    type: GENERATE_LEADER_MSG,
    payload: message
  };
};

// action to return errors
export const returnErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: { message, status }
  };
};
