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

  const links = [
    {
      text: 'search_screen.filter_dropdown.newest',
      onClick: () => getPosts(search),
    },
    {
      text: 'search_screen.filter_dropdown.lowest',
      onClick: () => filterPost(posts, 'lowest'),
    },
    {
      text: 'search_screen.filter_dropdown.highest',
      onClick: () => filterPost(posts, 'highest'),
    },
  ];

  return (
    <ul className="filter-dropdown position-absolute app-bg-white rounded-lg box-shadow overflow-hidden d-flex flex-column justify-content-center">
      {links.map((link) => (
        <li className="py-3 text-center" onClick={() => link.onClick()}>
          {t(link.text)}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  search: state.router.location.search,
});

export default connect(mapStateToProps, { filterPost, getPosts })(FilterDropdown);
