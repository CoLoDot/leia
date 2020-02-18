import { GET_MSG, GENERATE_LEADER_MSG } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MSG:
      return action.payload;
    case GENERATE_LEADER_MSG:
      return (state = action.payload);
    default:
      return state;
  }
}
