// React and style
import React, { useEffect } from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { getPost } from 'store/actions/post';

function Item({ getPost, post, match }) {
  useEffect(() => {
    if (match.params.id) {
      getPost(match.params.id);
    }
  }, []);

  return (
    <section className="item">
      <h1>{post.name}</h1>
    </section>
  );
}

const mapStateToProps = (state) => ({ post: state.posts.item });

export default connect(mapStateToProps, { getPost })(Item);
