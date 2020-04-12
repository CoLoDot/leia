import { GENERATE_MSG, GET_ERRORS } from './types';

// generate message
export const generateMessage = (message) => ({
  type: GENERATE_MSG,
  payload: message,
});

// action to return errors
export const returnErrors = (message, status) => ({
  type: GET_ERRORS,
  payload: { message, status },
});
