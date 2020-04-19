/* eslint-disable import/extensions */
import { GET_TAXA } from '../actions/types';

const initialState = {
  taxa: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TAXA:
      return {
        ...state,
        taxa: action.payload,
      };
    default:
      return state;
  }
}
