import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const RootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });
