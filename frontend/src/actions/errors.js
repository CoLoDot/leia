import { GET_ERRORS } from './types';

export const returnErrors = (message, status) => ({
  type: GET_ERRORS,
  payload: { message, status },
});
