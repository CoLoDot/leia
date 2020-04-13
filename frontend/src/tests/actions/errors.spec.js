/* eslint-disable no-undef */
import { returnErrors } from '../../actions/errors';

describe('Errors', () => {
  it('should return returnErrors with payload and GET_ERRORS', () => {
    const message = 'This is a message';
    const status = 400;
    const expected = {
      payload: { message: 'This is a message', status: 400 },
      type: 'GET_ERRORS',
    };
    expect(returnErrors(message, status)).toEqual(expected);
  });
});
