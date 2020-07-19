import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { postsReducer } from './post';
import { hamburgerReducer } from './hamburger';

export const RootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    hamburger: hamburgerReducer,
  });
