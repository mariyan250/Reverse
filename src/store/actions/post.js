import { GET_POSTS, GET_POST } from '../action-types';

import data from '../../db.json';

export function getPosts(query) {
  const queryString = query.split('=')[1].toLowerCase();
  const filteredPosts = data.filter(
    (post) =>
      post.name.toLowerCase().includes(queryString) ||
      post.category.toLowerCase().includes(queryString.toLowerCase()),
  );

  return {
    type: GET_POSTS,
    payload: query !== '' ? filteredPosts : data,
  };
}

export function getPost(id) {
  const filteredPost = data.find((post) => post.id == id);
  return {
    type: GET_POST,
    payload: filteredPost,
  };
}
