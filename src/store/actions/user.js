import { GET_USER, REMOVE_USER } from 'store/action-types';

export function getUser() {
  return {
    type: GET_USER,
    payload: {
      email: 'mariyan250@gmail.com',
      username: 'mariyan250',
    },
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER,
    payload: null,
  };
}
