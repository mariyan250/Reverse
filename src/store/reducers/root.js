import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { postsReducer } from './post';
import { hamburgerReducer } from './hamburger';
import { userReducer } from './user';

export const RootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    hamburger: hamburgerReducer,
    user: userReducer,
  });
