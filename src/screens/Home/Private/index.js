// React and style
import React, { useState } from 'react';
import './index.scss';

// Components
import Header from 'shared/components/Header';

const HomePrivate = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <main className="home-private">
      <Header />
      <form className="search mt-4 container-fluid px-1">
        <div className="row mx-auto justify-content-center">
          <div className="col-10 col-md-3 p-0 d-flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for item."
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

      <section className="home-one mt-4 mt-md-0 px-5">
        <h2>Categories</h2>
      </section>
    </main>
  );
};

export default HomePrivate;
