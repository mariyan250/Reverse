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
      <form className="search mt-5 container-fluid px-1">
        <div className="row mx-auto justify-content-center">
          <div className="col-10 col-md-3 p-0 d-flex">
            <input
              type="text"
              name="search"
              placeholder="What are you searching?"
              className="px-3 py-2"
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
        <h2 className="my-5 mx-2">Category</h2>
        <article className="container-fluid justify-content-center align-items-center">
          <div className="row">
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="/img/home.svg" title="Home" url="/?search=realestate" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard
                icon="/img/technology.svg"
                title="Technology"
                url="/?search=technology"
              />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="/img/car.svg" title="Automobile" url="/?search=automobile" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="/img/sport.svg" title="Sport" url="/?search=sport" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="/img/tshirt.svg" title="Cloths" url="/?search=cloths" />
            </div>
            <div className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
              <CategoryCard icon="/img/animal.svg" title="Pets" url="/?search=pets" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomePrivate;
