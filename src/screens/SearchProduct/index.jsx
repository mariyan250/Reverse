// React
import React, { useEffect } from 'react';

// Connect Redux
import { connect } from 'react-redux';
import { getPosts } from 'store/actions/post';

// Components
import Header from 'shared/components/Header';
import ItemList from '../../shared/components/Product/ItemList';

function SearchProduct({ getPosts, posts, location: { search } }) {
  useEffect(() => {
    getPosts(search);
  }, [getPosts, search]);

  return (
    <main className="search-product">
      <Header />
      <ItemList items={posts} title="search_screen.heading" />
    </main>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(SearchProduct);
