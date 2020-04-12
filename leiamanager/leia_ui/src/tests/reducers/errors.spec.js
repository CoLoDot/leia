import reducer from '../../reducers/errors';
import { GET_ERRORS } from '../../actions/types';

describe('Errors reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer([], {
        type: GET_ERRORS,
        payload: { message: {}, status: null },
      }),
    ).toEqual({
      message: {},
      status: null,
    });
  });
  it('should handle GET_ERRORS', () => {
    expect(
      reducer([], {
        type: GET_ERRORS,
        payload: { message: 'Fake error mesage', status: 400 },
      }),
    ).toEqual({
      message: 'Fake error mesage',
      status: 400,
    });
  });
});
