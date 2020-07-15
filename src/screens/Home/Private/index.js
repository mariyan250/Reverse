// React and style
import React, { useState } from 'react';
import './index.scss';

// Routes
import { searchRoutes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Header from 'shared/components/Header';
import CategoryCard from './components/CategoryCard';

const HomePrivate = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const categoryCards = [
    {
      icon: '/img/home.svg',
      title: t('home_screen.private.categories.titles.home'),
      url: searchRoutes.home,
    },
    {
      icon: '/img/technology.svg',
      title: t('home_screen.private.categories.titles.technology'),
      url: searchRoutes.technology,
    },
    {
      icon: '/img/automobile.svg',
      title: t('home_screen.private.categories.titles.automobile'),
      url: searchRoutes.automobile,
    },
    {
      icon: '/img/sport.svg',
      title: t('home_screen.private.categories.titles.sport'),
      url: searchRoutes.sport,
    },
    {
      icon: '/img/tshirt.svg',
      title: t('home_screen.private.categories.titles.cloths'),
      url: searchRoutes.cloths,
    },
    {
      icon: '/img/pets.svg',
      title: t('home_screen.private.categories.titles.pets'),
      url: searchRoutes.pets,
    },
  ];

  return (
    <main className="home-private">
      <Header />
      <form className="search" action="/search">
        <section className="d-flex mx-auto justify-content-center w-100">
          <article className="search-col d-flex p-0 w-100">
            <input
              type="text"
              name="query"
              placeholder={t('home_screen.private.input.placeholder')}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <div className="p-0">
              <button
                className={`search-btn h-100 border-0 ${
                  searchQuery ? 'app-bg-primary' : 'app-bg-secondary'
                } d-flex justify-content-center align-items-center`}
              >
                <i className="fas fa-search app-text-white" />
              </button>
            </div>
          </article>
        </section>
      </form>

      <section className="home-one mt-4">
        <h2 className="mt-5 mb-4 mx-2">{t('home_screen.private.heading')}</h2>
        <article className="container-fluid justify-content-center align-items-center">
          <section className="row">
            {categoryCards.map((card) => (
              <article className="col-6 p-2 col-sm-3 col-md-2 p-md-2">
                <CategoryCard {...card} />
              </article>
            ))}
          </section>
        </article>
      </section>
    </main>
  );
};

export default HomePrivate;
