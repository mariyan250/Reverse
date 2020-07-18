import { GET_POSTS } from '../action-types';

import data from '../../db.json';

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: data,
  };
}
