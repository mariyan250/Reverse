// React and Style
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

// Redux
import { connect } from 'react-redux';
import { getPosts } from 'store/actions/post';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import ItemList from 'shared/components/Product/CardList';
import Search from 'shared/components/Search';
import FilterButton from './components/FilterButton';

function SearchProduct({ getPosts, posts, location }) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    getPosts(location.search);
  }, [getPosts, location]);

  return (
    <main className={`${styles.search} px-4 mx-auto`}>
      <div className={`my-5 d-flex`}>
        <Search />
      </div>

      <section className={`d-flex justify-content-between align-items-center mb-4`}>
        <h2>{t('search.heading')}</h2>
        <FilterButton isOpen={open} onClick={() => setOpen(!open)} role="filter-button" />
      </section>

      <div className={`app-bg-gray-darker p-2 p-md-4`}>
        <ItemList items={posts} title="search.heading" />
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(SearchProduct);
