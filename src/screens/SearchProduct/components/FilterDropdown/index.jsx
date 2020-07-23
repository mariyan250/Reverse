// React and Style
import React from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { filterPost, getPosts } from 'store/actions/post';

function FilterDropdown({ posts, filterPost, getPosts, search }) {
  return (
    <ul className="filter-dropdown position-absolute app-bg-white rounded-lg box-shadow overflow-hidden d-flex flex-column justify-content-center">
      <li className="py-3 text-center" onClick={() => getPosts(search)}>
        Newest
      </li>

      <li className="py-3 text-center" onClick={() => filterPost(posts, 'lowest')}>
        Lowest price
      </li>

      <li className="py-3 text-center" onClick={() => filterPost(posts, 'highest')}>
        Highest price
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  search: state.router.location.search,
});

export default connect(mapStateToProps, { filterPost, getPosts })(FilterDropdown);
