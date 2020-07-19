// React
import React, { useEffect } from 'react';

// Connect Redux
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/post';

// Components
import Header from 'shared/components/Header';
import ItemList from './components/ItemList';

function Search({ getPosts, posts }) {
  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <main className="search">
      <Header />
      <ItemList items={posts} />
    </main>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(Search);
