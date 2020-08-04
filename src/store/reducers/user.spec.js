import { userReducer } from './user';
import { GET_USER, REMOVE_USER } from '../action-types';

describe('User Reducer', () => {
  it('should reduce and get user', () => {
    const action = {
      type: GET_USER,
      payload: {
        email: 'Asan123@gmail.com',
      },
    };

    expect(userReducer({}, action)).toEqual({
      email: 'Asan123@gmail.com',
    });
  });

  it('should reduce and remove user', () => {
    const action = {
      type: REMOVE_USER,
      payload: null,
    };

    expect(userReducer({}, action)).toEqual(null);
  });
});
