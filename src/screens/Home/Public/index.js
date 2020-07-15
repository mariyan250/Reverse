// React and style
import React, { useState } from 'react';
import './index.scss';

// Components
import Card from './components/Card';
import Arrow from './components/Arrow';
import Hamburger from 'shared/components/Hamburger';
import AuthModal from './components/AuthModal';

// Translation
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { t } = useTranslation();

  const cards = [
    { iconName: 'fas fa-check', title: t('home_screen.public.cards.one') },
    { iconName: 'fas fa-truck', title: t('home_screen.public.cards.two') },
    { iconName: 'fas fa-user', title: t('home_screen.public.cards.three') },
  ];

  return (
    <main className="home">
      {modalOpened && <AuthModal className="auth-m position-absolute" />}

      <section className="home-intro">
        <section className="black-layer d-flex flex-column justify-content-center align-items-center vh-100 app-bg-black-transparent">
          <h1 className="text-center font-weight-bold app-text-white">
            {t('home_screen.public.heading')}
            <span className="d-inline-block px-2 my-2 ml-3 app-bg-primary">
              {t('home_screen.public.app_name')}
            </span>
          </h1>
          <h3 className="text-center mt-1 mb-5 app-text-white">
            {t('home_screen.public.second_heading')}
          </h3>

          <Arrow className="pulsing-arrow position-absolute" />

          <Hamburger
            className={`burger-menu position-absolute ${modalOpened ? 'toggled' : ''}`}
            onClick={() => setModalOpened(!modalOpened)}
          />
        </section>
      </section>

      <section className="one pb-4">
        <hr className="my-5 my-md-5 mx-auto app-bg-primary" />
        <article className="d-md-flex flex-column">
          <h2 className="text-center">{t('home_screen.public.section_one.heading')}</h2>
          <article className="d-flex flex-column flex-md-row justify-content-between">
            <p className="p-0 mb-4">{t('home_screen.public.section_one.content')}</p>
            <img
              src="/img/cloths.jpg"
              alt={t('home_screen.public.img.alt')}
              className="img-fluid align-self-center"
            />
          </article>
        </article>
      </section>

      <section className="two py-0 app-bg-gray">
        <article className="py-3 py-md-5 d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Home;
