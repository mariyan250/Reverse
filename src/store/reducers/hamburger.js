import { TOGGLE_HAMBURGER, CLOSE_HAMBURGER } from '../action-types/index';

const initialState = {
  isOpen: false,
};

export function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return { isOpen: action.payload.isOpen };

    case CLOSE_HAMBURGER:
      return { isOpen: false };

    default:
      return state;
  }
}
