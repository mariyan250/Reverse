// React and Style
import React from 'react';
import './index.scss';

// Components
import Arrow from './components/Arrow';

const Home = () => {
  return (
    <main className="home">
      <section className="black-layer vh-100 d-flex justify-content-center align-items-center flex-column text-center">
        <h1 className="font-weight-bold">Reverse</h1>
        <h2 className="mt-4">The social network for traders.</h2>

        <Arrow className="pulsing-arrow position-absolute" />
      </section>
    </main>
  );
};

export default Home;
