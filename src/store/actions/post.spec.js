// Actions
import { getPosts, filterPost, getPost, getPromoPosts } from './post';

// Action Types
import { GET_POST, GET_POSTS } from '../action-types';

// Database
import posts from 'db.json';

describe('Post Actions', () => {
  it('getPosts() with query', () => {
    const expected = {
      type: GET_POSTS,
      payload: posts,
    };

    const data = getPosts('q=technology');
    expect(data).toEqual(expected);
  });

  it('getPosts() with no query', () => {
    const filteredPosts = posts.sort((a, b) => a.id - b.id);

    const expected = {
      type: GET_POSTS,
      payload: null,
    };

    const data = getPosts('');
    expect(data).toEqual(expected);
  });

  it('filterPost() should filter posts by newest', () => {
    const expected = {
      type: GET_POSTS,
      payload: posts.sort((a, b) => a.id - b.id),
    };

    expect(filterPost(posts, 'newest')).toEqual(expected);
  });

  it('filterPost() should filter posts by lowest', () => {
    const filteredPosts = posts.sort((a, b) => a.price - b.price);
    const expected = {
      type: GET_POSTS,
      payload: filteredPosts,
    };

    expect(filterPost(posts, 'lowest')).toEqual(expected);
  });

  it('filterPosts() should filter posts by highest', () => {
    const filteredPosts = posts.sort((a, b) => b.price - a.price);

    const expected = {
      type: GET_POSTS,
      payload: filteredPosts,
    };

    expect(filterPost(posts, 'highest')).toEqual(expected);
  });

  it('getPost() with id should return the post', () => {
    const post = posts.find((post) => post.id === 3);

    const expected = {
      type: GET_POST,
      payload: post,
    };

    expect(getPost('3')).toEqual(expected);
  });

  it('getPromoPosts() should return the promo posts', () => {
    const expected = {
      type: GET_POSTS,
      payload: posts,
    };

    expect(getPromoPosts()).toEqual(expected);
  });
});
