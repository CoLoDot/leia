/* eslint-disable import/extensions */
import {
  GET_TAXA, UPDATE_TAXA, UPDATING_TAXA, UPDATED_TAXA,
} from '../actions/types';

const initialState = {
  taxa: [],
  update: {
    loading: false,
    updated: false,
    message: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TAXA:
      return {
        ...state,
        taxa: action.payload,
      };
    case UPDATING_TAXA:
      return {
        ...state,
        update: {
          loading: true,
        },
      };
    case UPDATE_TAXA:
      return {
        ...state,
        update: {
          loading: true,
          updated: true,
          message: action.payload,
        },
      };
    case UPDATED_TAXA:
      return {
        ...state,
        update: {
          loading: false,
        },
      };
    default:
      return state;
  }
}
