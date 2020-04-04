/* eslint-disable import/extensions */
import { GET_TAXON } from '../actions/types.js';

const initialState = {
  taxon: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TAXON:
      return {
        ...state,
        taxon: action.payload,
      };
    default:
      return state;
  }
}
