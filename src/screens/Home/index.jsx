// React and style
import React, { useEffect } from 'react';
import styles from './index.module.scss';

// Redux
import { connect } from 'react-redux';
import { getPromoPosts } from 'store/actions/post';

// Translation
import { useTranslation } from 'react-i18next';

// Routes
import { searchRoutes } from 'shared/constants/routes';

// Components
import Search from 'shared/components/Search';
import CategoryCard from './components/CategoryCard';
import ItemList from 'shared/components/Product/CardList';

function Home({ getPromoPosts, promoPosts }) {
  const { t } = useTranslation();

  useEffect(() => {
    getPromoPosts();
  }, [getPromoPosts]);

  const categoryCards = [
    {
      icon: '/img/home.svg',
      title: 'home.categories.titles.home',
      url: searchRoutes.home,
    },
    {
      icon: '/img/technology.svg',
      title: 'home.categories.titles.technology',
      url: searchRoutes.technology,
    },
    {
      icon: '/img/automobile.svg',
      title: 'home.categories.titles.automobile',
      url: searchRoutes.automobile,
    },
    {
      icon: '/img/sport.svg',
      title: 'home.categories.titles.sport',
      url: searchRoutes.sport,
    },
    {
      icon: '/img/tshirt.svg',
      title: 'home.categories.titles.cloths',
      url: searchRoutes.cloths,
    },
    {
      icon: '/img/pets.svg',
      title: 'home.categories.titles.pets',
      url: searchRoutes.pets,
    },
  ];

  return (
    <main className={`${styles.home} mx-auto px-4 px-md-5`}>
      <div className={`d-flex my-5`}>
        <Search />
      </div>

      <section>
        <h2 className={`mb-4`}>{t('home.heading')}</h2>
        <div className={`${styles.categories}`}>
          {categoryCards.map((category, i) => (
            <CategoryCard key={i} {...category} />
          ))}
        </div>
      </section>

      <section>
        <h2 className={`mt-5 mb-4`}>{t('home.second_heading')}</h2>
        <div className={`app-bg-gray-darker p-2`}>
          <ItemList items={promoPosts} />
        </div>
      </section>
    </main>
  );
}

const mapStateToPros = (state) => ({
  promoPosts: state.posts.items,
});

export default connect(mapStateToPros, { getPromoPosts })(Home);
