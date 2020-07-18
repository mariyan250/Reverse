import { GET_POSTS } from '../action-types';

const initialState = {
  items: [],
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
