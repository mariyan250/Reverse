import { TOGGLE_HAMBURGER } from '../action-types';

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
    type: TOGGLE_HAMBURGER,
    payload: {
      isOpen: false,
    },
  };
}
