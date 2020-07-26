import { GET_USER, REMOVE_USER } from 'store/action-types/';

export function userReducer(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case REMOVE_USER:
      return action.payload;

    default:
      return state;
  }
}
