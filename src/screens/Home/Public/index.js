// React and Style
import React from 'react';
import './index.scss';

// Components
import Arrow from './components/Arrow';

const Home = () => {
  return (
    <main className="home">
      <section className="background">
        <section className="black-layer vh-100 d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="font-weight-bold">Reverse</h1>
          <h2 className="mt-4">The social network for traders.</h2>
          <Arrow className="pulsing-arrow position-absolute" />
        </section>
      </section>
      <section className="one vh-100 d-md-flex justify-content-md-around">
        <article className="option-card">
          <i class="fas fa-check mx-auto"></i>
          <h2 className="mt-3">Sell your items.</h2>
        </article>

        <article className="option-card">
          <i class="fas fa-money-bill-wave"></i>
          <h2 className="mt-3">Get Your Money.</h2>
        </article>

        <article className="option-card">
          <i class="fas fa-user"></i>
          <h2 className="mt-3">Meet New People!</h2>
        </article>
      </section>
    </main>
  );
};

export default Home;
