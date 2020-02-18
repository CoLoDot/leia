import { GENERATE_LEADER_MSG } from "./types";

// Add leader message
export const generateMessage = message => {
  return {
    type: GENERATE_LEADER_MSG,
    payload: message
  };
};
