// React and style
import React, { useState } from 'react';
import './index.scss';

// Components
import Header from 'shared/components/Header';
import CategoryCard from './components/CategoryCard';

const HomePrivate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="home-private pb-1">
      <Header />
      <form className="search mt-4 container-fluid px-1">
        <div className="row mx-auto justify-content-center">
          <div className="col-10 col-md-3 p-0 d-flex">
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              className="px-2 py-2"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <div className={`col-auto p-0 ${searchQuery ? 'd-block' : 'd-none'}`}>
              <button className="search-btn d-flex justify-content-center align-items-center">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </form>

      <section className="home-one mt-4 px-4">
        <h2 className="my-5 mx-2">Categories</h2>
        <article className="container-fluid justify-content-center align-items-center">
          <div className="row">
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-home" title="Real Estate" url="/?search=realestate" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-mobile" title="Technology" url="/?search=technology" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-car" title="Automobile" url="/?search=automobile" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-volleyball-ball" title="Sport" url="/?search=sport" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-tshirt" title="Cloths" url="/?search=cloths" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="fas fa-paw" title="Pets" url="/?search=pets" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomePrivate;
