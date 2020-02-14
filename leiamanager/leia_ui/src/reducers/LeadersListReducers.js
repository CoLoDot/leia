import { GET_LEADERS } from "../actions/types.js";

const initialState = {
  leaders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADERS:
      return {
        ...state,
        leaders: action.payload
      };
    default:
      return state;
  }
}
