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
import Header from 'shared/components/Header';
import CategoryCard from './components/CategoryCard';
import ItemList from 'shared/components/Product/ItemList';
import Search from 'shared/components/Search';

function Home({ getPromoPosts, promoPosts }) {
  const { t } = useTranslation();

  useEffect(() => {
    getPromoPosts();
  }, [getPromoPosts]);

  const categoryCards = [
    {
      icon: '/img/home.svg',
      title: 'home_screen.private.categories.titles.home',
      url: searchRoutes.home,
    },
    {
      icon: '/img/technology.svg',
      title: 'home_screen.private.categories.titles.technology',
      url: searchRoutes.technology,
    },
    {
      icon: '/img/automobile.svg',
      title: 'home_screen.private.categories.titles.automobile',
      url: searchRoutes.automobile,
    },
    {
      icon: '/img/sport.svg',
      title: 'home_screen.private.categories.titles.sport',
      url: searchRoutes.sport,
    },
    {
      icon: '/img/tshirt.svg',
      title: 'home_screen.private.categories.titles.cloths',
      url: searchRoutes.cloths,
    },
    {
      icon: '/img/pets.svg',
      title: 'home_screen.private.categories.titles.pets',
      url: searchRoutes.pets,
    },
  ];

  return (
    <>
      <Header />
      <main className="home-private px-md-5">
        <section className="search my-5 mx-auto px-4">
          <Search />
        </section>

        <section className="home-one px-4">
          <h2 className="mb-4">{t('home_screen.private.heading')}</h2>
          <article className="card-container">
            {categoryCards.map((card, i) => (
              <CategoryCard key={i} {...card} />
            ))}
          </article>
        </section>

        <section className="home-two mt-5 px-4">
          <ItemList items={promoPosts} title="home_screen.private.second_heading" />
        </section>
      </main>
    </>
  );
}

const mapStateToPros = (state) => ({
  promoPosts: state.posts.items,
});

export default connect(mapStateToPros, { getPromoPosts })(Home);
