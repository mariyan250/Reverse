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

function Home() {
  const [modalOpened, setModalOpened] = useState(false);
  const { t } = useTranslation();

  const cards = [
    { iconName: 'fas fa-check', title: 'home_screen.public.cards.one' },
    { iconName: 'fas fa-truck', title: 'home_screen.public.cards.two' },
    { iconName: 'fas fa-user', title: 'home_screen.public.cards.three' },
  ];

  return (
    <main className="home">
      {modalOpened && <AuthModal className="auth-m position-absolute" />}

      <section className="home-intro">
        <section className="d-flex flex-column justify-content-center align-items-center vh-100 app-bg-black-transparent text-center">
          <h1 className=" app-text-white font-weight-bold">
            {t('home_screen.public.heading')}
            <span className="px-2 my-2 ml-3 app-bg-primary">
              {t('home_screen.public.app_name')}
            </span>
          </h1>
          <h3 className="mt-3 app-text-white">{t('home_screen.public.second_heading')}</h3>
          <Arrow className="pulsing-arrow position-absolute" />
          <Hamburger
            className={`burger-menu position-absolute ${modalOpened ? 'toggled' : ''}`}
            onClick={() => setModalOpened(!modalOpened)}
          />
        </section>
      </section>

      <section className="one pb-5">
        <hr className="my-5 mx-auto app-bg-primary rounded-pill" />
        <article>
          <h2 className="text-center">{t('home_screen.public.section_one.heading')}</h2>
          <article className="d-md-flex justify-content-between">
            <p className="mb-4">{t('home_screen.public.section_one.content')}</p>
            <img
              src="/img/cloths.jpg"
              alt={t('home_screen.public.img.alt')}
              className="img-fluid"
            />
          </article>
        </article>
      </section>

      <section className="two app-bg-gray">
        <article className="py-3 py-md-5 d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </article>
      </section>
    </main>
  );
}

export default Home;
