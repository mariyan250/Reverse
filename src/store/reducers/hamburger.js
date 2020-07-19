import { TOGGLE_HAMBURGER } from '../action-types/index';
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  isOpen: false,
};

export function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return { isOpen: action.payload.isOpen };

    case LOCATION_CHANGE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
}
