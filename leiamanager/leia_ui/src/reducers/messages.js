import { GENERATE_MSG } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_MSG:
      return (state = action.payload);
    default:
      return state;
  }
}
