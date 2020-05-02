/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_TAXA } from './types';
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
