import { TOGGLE_HAMBURGER } from '../action-types/index';

const initialState = {
  isOpen: false,
};

export function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return { isOpen: action.payload.isOpen };

    default:
      return state;
  }
}
