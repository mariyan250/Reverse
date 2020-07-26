import { TOGGLE_HAMBURGER } from '../action-types/index';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  isOpen: false,
};

export function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return { isOpen: action.payload.isOpen };

    case LOCATION_CHANGE:
      return { isOpen: false };

    default:
      return state;
  }
}
