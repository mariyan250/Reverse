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
import Loading from 'shared/components/Loading';
import FilterButton from './components/FilterButton';

function SearchProduct({ getPosts, posts, location }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    getPosts(location.search);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [getPosts, location]);

  return (
    <main className={`${styles.search} mx-auto px-4 px-md-5`}>
      <div className="my-5">
        <Search />
      </div>

      {loading ? (
        <div className={`${styles.loading} d-flex justify-content-center`}>
          <Loading />
        </div>
      ) : posts.length ? (
        <div>
          <section className="d-flex justify-content-between align-items-center mb-4">
            <h2>{t('search.heading')}</h2>
            <FilterButton isOpen={open} onClick={() => setOpen(!open)} role="filter-button" />
          </section>

          <div className="app-bg-gray-darker p-2">
            <ItemList items={posts} title="search.heading" />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2>No Posts Found!</h2>
        </div>
      )}
    </main>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(SearchProduct);
