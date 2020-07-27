// React and style
import React, { useEffect } from 'react';
import './index.scss';

// Routes
import { searchRoutes } from 'shared/constants/routes';

// Redux
import { connect } from 'react-redux';
import { getPromoPosts } from 'store/actions/post';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import CategoryCard from './components/CategoryCard';
import ItemList from 'shared/components/Product/CardList';
import Search from 'shared/components/Search';

function Home({ getPromoPosts, promoPosts }) {
  const { t } = useTranslation();

  useEffect(() => {
    getPromoPosts();
  }, [getPromoPosts]);

  const categoryCards = [
    {
      icon: '/img/home.svg',
      title: 'home_screen.categories.titles.home',
      url: searchRoutes.home,
    },
    {
      icon: '/img/technology.svg',
      title: 'home_screen.categories.titles.technology',
      url: searchRoutes.technology,
    },
    {
      icon: '/img/automobile.svg',
      title: 'home_screen.categories.titles.automobile',
      url: searchRoutes.automobile,
    },
    {
      icon: '/img/sport.svg',
      title: 'home_screen.categories.titles.sport',
      url: searchRoutes.sport,
    },
    {
      icon: '/img/tshirt.svg',
      title: 'home_screen.categories.titles.cloths',
      url: searchRoutes.cloths,
    },
    {
      icon: '/img/pets.svg',
      title: 'home_screen.categories.titles.pets',
      url: searchRoutes.pets,
    },
  ];

  return (
    <main className="home mx-auto px-4 px-md-5" data-testid="home">
      <section className="my-5 d-flex">
        <Search />
      </section>

      <section className="categories">
        <h3 className="mb-4">{t('home_screen.heading')}</h3>

        <article className="categories-container">
          {categoryCards.map((category, i) => (
            <CategoryCard url={category.url} icon={category.icon} title={category.title} key={i} />
          ))}
        </article>
      </section>

      <section className="promo-offers">
        <h3 className="mt-5 mb-4">{t('home_screen.second_heading')}</h3>

        <article className="promo-offers-container p-2 app-bg-gray-darker">
          <ItemList items={promoPosts} />
        </article>
      </section>
    </main>
  );
}

const mapStateToPros = (state) => ({
  promoPosts: state.posts.items,
});

export default connect(mapStateToPros, { getPromoPosts })(Home);
