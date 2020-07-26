// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { filterPost } from 'store/actions/post';

function FilterDropdown({ posts, filterPost }) {
  const { t } = useTranslation();

  const links = [
    {
      text: 'search_screen.filter_dropdown.newest',
      onClick: () => filterPost(posts, 'newest'),
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
      {links.map((link, i) => (
        <li className="py-3 text-center" key={i} onClick={() => link.onClick()}>
          {t(link.text)}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { filterPost })(FilterDropdown);
