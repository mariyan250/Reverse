import { TOGGLE_HAMBURGER } from '../action-types';

export function toggleHamburger(state) {
  return {
    type: TOGGLE_HAMBURGER,
    payload: {
      isOpen: state,
    },
  };
}
