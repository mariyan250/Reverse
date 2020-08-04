import { getPosts, filterPost, getPost, getPromoPosts } from './post';
import { GET_POST, GET_POSTS } from '../action-types';

describe('Post Actions', () => {
  let posts;
  beforeEach(() => {
    posts = [
      {
        id: 1,
        name: 'Lenovo IdeaPad 3, 15.6, AMD Ryzen™',
        category: 'technology',
        images: [
          'https://s13emagst.akamaized.net/products/31489/31488238/images/res_cf71f94f6a0749441e0c420bf54540c4.jpg',
          'https://s13emagst.akamaized.net/products/31489/31488238/images/res_2f8516cc97228850a0da5d2afc3f7a5e.jpg',
          'https://s13emagst.akamaized.net/products/31489/31488236/images/res_2c4a157a93408674f224847926396a77.jpg',
        ],
        price: '979.99',
        location: 'Sofia',
        seller: 'Mariyan V.',
        date: '8 July - 6:00',
        type: 'Promo',
      },
      {
        id: 2,
        name: 'Lenovo G50-30, 15.6, Intel Pentium™',
        category: 'technology',
        images: [
          'https://s13emagst.akamaized.net/products/15874/15873942/images/res_b8032c207f90cec1988f271d669be260.jpg',
          'https://s13emagst.akamaized.net/products/15874/15873942/images/res_7c3af5edf9fe802790e0792c179ac9d1.jpg',
          'https://s13emagst.akamaized.net/products/15874/15873942/images/res_b27e9a34c756b4c5814d9eccdf745b5c.jpg',
        ],
        price: '600',
        location: 'Sofia',
        seller: 'Mariyan V.',
        date: '8 July - 6:00',
        type: 'Promo',
      },
      {
        id: 3,
        name: 'Iphone X, 128SD / 256SD, Black and White',
        category: 'technology',
        images: [
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_b0edd1ced6577580eaec29aad246405d.jpg',
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_a395977c320f9b8440947b9cb2ef40af.jpg',
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_15bda9b038fc372c49488bb599810eda.jpg',
        ],
        price: '1200',
        location: 'Blagoevgrad',
        seller: 'Mariyan V.',
        date: '8 July - 6:00',
        type: 'Promo',
      },
    ];
  });

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
      payload: filteredPosts,
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
    const expected = {
      type: GET_POST,
      payload: {
        id: 3,
        name: 'Iphone X, 128SD / 256SD, Black and White',
        category: 'technology',
        images: [
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_b0edd1ced6577580eaec29aad246405d.jpg',
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_a395977c320f9b8440947b9cb2ef40af.jpg',
          'https://s13emagst.akamaized.net/products/17043/17042927/images/res_15bda9b038fc372c49488bb599810eda.jpg',
        ],
        price: '1200',
        location: 'Blagoevgrad',
        seller: 'Mariyan V.',
        date: '8 July - 6:00',
        type: 'Promo',
      },
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
