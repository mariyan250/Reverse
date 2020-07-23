// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { filterPost, getPosts } from 'store/actions/post';

function FilterDropdown({ posts, filterPost, getPosts, search }) {
  const { t } = useTranslation();

  return (
    <ul className="filter-dropdown position-absolute app-bg-white rounded-lg box-shadow overflow-hidden d-flex flex-column justify-content-center">
      <li className="py-3 text-center" onClick={() => getPosts(search)}>
        {t('search_screen.filter_dropdown.newest')}
      </li>

      <li className="py-3 text-center" onClick={() => filterPost(posts, 'lowest')}>
        {t('search_screen.filter_dropdown.lowest')}
      </li>

      <li className="py-3 text-center" onClick={() => filterPost(posts, 'highest')}>
        {t('search_screen.filter_dropdown.highest')}
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  search: state.router.location.search,
});

export default connect(mapStateToProps, { filterPost, getPosts })(FilterDropdown);
