// React and Style
import React from 'react';
import styles from './index.module.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { filterPost } from 'store/actions/post';

function FilterDropdown({ posts, filterPost }) {
  const { t } = useTranslation();

  const links = [
    {
      text: 'search.filter_dropdown.newest',
      onClick: () => filterPost(posts, 'newest'),
      role: 'filter-newest',
    },
    {
      text: 'search.filter_dropdown.lowest',
      onClick: () => filterPost(posts, 'lowest'),
      role: 'filter-lowest',
    },
    {
      text: 'search.filter_dropdown.highest',
      onClick: () => filterPost(posts, 'highest'),
      role: 'filter-highest',
    },
  ];

  return (
    <ul
      className={`${styles.dropdown} position-absolute app-bg-white rounded-lg box-shadow overflow-hidden d-flex flex-column justify-content-center`}
      data-testid="filter-dropdown"
    >
      {links.map((link, i) => (
        <li className="py-3 text-center" key={i} role={link.role} onClick={() => link.onClick()}>
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
