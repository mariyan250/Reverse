// React
import React, { Fragment, useEffect, useState } from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { getPosts } from 'store/actions/post';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Header from 'shared/components/Header';
import ItemList from 'shared/components/Product/CardList';
import Search from 'shared/components/Search';
import FilterButton from './components/FilterButton';

function SearchProduct({ getPosts, posts, location: { search } }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    getPosts(search);
  }, [getPosts, search]);

  return (
    <Fragment>
      <Header />

      <main className="search-product px-4 mx-auto">
        <section className="my-5 d-flex">
          <Search />
        </section>

        <section className="products-upper-line d-flex justify-content-between align-items-center mb-4">
          <h3>{t('search_screen.heading')}</h3>
          <FilterButton isOpen={open} onClick={() => setOpen(!open)} />
        </section>

        <section className="products-container app-bg-gray-darker p-2 p-md-4">
          <ItemList items={posts} title="search_screen.heading" />
        </section>
      </main>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(SearchProduct);
