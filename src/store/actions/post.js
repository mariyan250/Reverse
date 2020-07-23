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
  const filteredPost = data.find((post) => post.id.toString() === id);
  return {
    type: GET_POST,
    payload: filteredPost,
  };
}

export function getPromoPosts() {
  const promoPosts = data.filter((post) => post.type === 'Promo');
  return {
    type: GET_POSTS,
    payload: promoPosts.slice(0, 5),
  };
}

export function filterPost(posts, filter) {
  let filteredPosts;

  if (filter === 'lowest') {
    filteredPosts = [...posts].sort((a, b) => a.price - b.price);
  } else if (filter === 'highest') {
    filteredPosts = [...posts].sort((a, b) => b.price - a.price);
  }

  return {
    type: GET_POSTS,
    payload: filteredPosts,
  };
}
