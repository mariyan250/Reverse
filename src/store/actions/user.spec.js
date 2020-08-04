import { getUser, removeUser } from './user';
import { GET_USER, REMOVE_USER } from '../action-types';

describe('User Actions', () => {
  it('getUser() should return user', () => {
    const expected = {
      type: GET_USER,
      payload: {
        email: 'mariyan250@gmail.com',
        username: 'mariyan250',
      },
    };

    expect(getUser()).toEqual(expected);
  });

  it('removeUser() should remove user and return null', () => {
    const expected = {
      type: REMOVE_USER,
      payload: null,
    };

    expect(removeUser()).toEqual(expected);
  });
});
