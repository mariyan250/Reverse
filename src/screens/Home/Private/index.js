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
      title: 'home_screen.private.categories.titles.home',
      url: searchRoutes.home,
      id: 1,
    },
    {
      icon: '/img/technology.svg',
      title: 'home_screen.private.categories.titles.technology',
      url: searchRoutes.technology,
      id: 2,
    },
    {
      icon: '/img/automobile.svg',
      title: 'home_screen.private.categories.titles.automobile',
      url: searchRoutes.automobile,
      id: 3,
    },
    {
      icon: '/img/sport.svg',
      title: 'home_screen.private.categories.titles.sport',
      url: searchRoutes.sport,
      id: 4,
    },
    {
      icon: '/img/tshirt.svg',
      title: 'home_screen.private.categories.titles.cloths',
      url: searchRoutes.cloths,
      id: 5,
    },
    {
      icon: '/img/pets.svg',
      title: 'home_screen.private.categories.titles.pets',
      url: searchRoutes.pets,
      id: 6,
    },
  ];

  return (
    <>
      <Header />
      <main className="home-private">
        <form className="mx-auto my-5 px-4" action="/search">
          <article className="d-flex">
            <input
              type="text"
              name="query"
              placeholder={t('home_screen.private.input.placeholder')}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              required
            />
            <article>
              <button
                className={`h-100 border-0 ${
                  searchQuery ? 'app-bg-primary' : 'app-bg-secondary'
                } d-flex justify-content-center align-items-center`}
              >
                <i className="fas fa-search app-text-white" />
              </button>
            </article>
          </article>
        </form>

        <section className="home-one px-4">
          <h2 className="mb-4">{t('home_screen.private.heading')}</h2>
          <article className="card-container">
            {categoryCards.map((card) => (
              <CategoryCard key={card.id} {...card} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePrivate;
