import { TOGGLE_HAMBURGER, CLOSE_HAMBURGER } from '../action-types';

export function toggleHamburger(state) {
  return {
    type: TOGGLE_HAMBURGER,
    payload: {
      isOpen: state,
    },
  };
}

export function closeHamburger() {
  return {
    type: CLOSE_HAMBURGER,
  };
}
