import { combineReducers } from 'redux';
import { postsReducer } from './post';
import { hamburgerReducer } from './hamburger';
import { userReducer } from './user';

export const RootReducer = () =>
  combineReducers({
    posts: postsReducer,
    hamburger: hamburgerReducer,
    user: userReducer,
  });
