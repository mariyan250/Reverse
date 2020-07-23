// React
import React, { useEffect, useState } from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { getPosts } from 'store/actions/post';

// Components
import Header from 'shared/components/Header';
import ItemList from 'shared/components/Product/ItemList';
import Search from 'shared/components/Search';
import FilterButton from './components/FilterButton';

function SearchProduct({ getPosts, posts, location: { search } }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPosts(search);
  }, [getPosts, search]);

  return (
    <>
      <Header />
      <main className="search-product px-4 mx-auto">
        <section className="my-5 d-flex">
          <Search />
        </section>

        <section className="products-upper-line d-flex justify-content-between align-items-center mb-4">
          <h3>Products</h3>
          <FilterButton isOpen={open} onClick={() => setOpen(!open)} location={20} />
        </section>

        <section className="products-container app-bg-gray-darker p-2 p-md-4">
          <ItemList items={posts} title="search_screen.heading" />
        </section>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps, { getPosts })(SearchProduct);
