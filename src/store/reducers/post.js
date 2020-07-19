import { GET_POSTS, GET_POST } from '../action-types';

const initialState = {
  items: [],
  item: {},
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
      };

    case GET_POST:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
