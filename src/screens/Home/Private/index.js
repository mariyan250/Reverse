// React and style
import React from 'react';
import './index.scss';

// Components
import Header from 'shared/components/Header';

const HomePrivate = () => {
  return (
    <main className="home-private">
      <Header />
      <form className="search mt-4 container-fluid px-1">
        <div className="row mx-auto justify-content-center">
          <div className="col-9 col-md-3 p-0">
            <input type="text" name="" id="" placeholder="Search for item." className="px-2 py-2" />
          </div>
          <div className="col-auto p-0">
            <button className="search-btn d-flex justify-content-center align-items-center">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>

      <section className="home-one mt-4 px-4">
        <h2>Categories</h2>
      </section>
    </main>
  );
};

export default HomePrivate;
