/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TAXA, UPDATE_TAXA, UPDATING_TAXA, UPDATED_TAXA,
} from './types';
import { returnErrors } from './errors';

export const getTaxa = () => (dispatch) => axios
  .get('/api/taxa/')
  .then((res) => {
    dispatch({
      type: GET_TAXA,
      payload: res.data,
    });
  })
  .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

export const updateTaxa = () => (dispatch) => {
  dispatch({ type: UPDATING_TAXA });
  axios
    .get('/api/taxa/update_taxa/')
    .then((res) => {
      dispatch({
        type: UPDATE_TAXA,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.status, null)))
    .then(() => dispatch(getTaxa()))
    .then(() => dispatch({ type: UPDATED_TAXA }));
};
