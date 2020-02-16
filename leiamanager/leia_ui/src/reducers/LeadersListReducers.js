import { GET_LEADERS, DELETE_LEADERS, ADD_LEADERS } from "../actions/types.js";

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
    case DELETE_LEADERS:
      return {
        ...state,
        leaders: state.leaders.filter(leader => action.payload !== leader.id)
      };
    case ADD_LEADERS:
      return {
        ...state,
        leaders: [...state.leaders, action.payload]
      };
    default:
      return state;
  }
}
