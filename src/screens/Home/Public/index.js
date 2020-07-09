// React and Style
import React from 'react';
import './index.scss';

// Components
import Arrow from './components/Arrow';
import Card from './components/Card';

const Home = () => {
  return (
    <main className='home'>
      <section className='background'>
        <section className='black-layer vh-100 d-flex justify-content-center align-items-center flex-column text-center'>
          <h1 className='font-weight-bold'>Reverse</h1>
          <h2 className='mt-4'>The social network for traders.</h2>
          <Arrow className='pulsing-arrow position-absolute' />
        </section>
      </section>
      <section className='one vh-100'>
        <article className='py-5 vh-100 d-flex flex-md-row flex-column justify-content-around'>
          <Card iconName='fas fa-check' text='Sell your items.' />
          <Card iconName='fas fa-money-bill-wave' text='Get Your Money.' />
          <Card iconName='fas fa-user' text='Meet new people.' />
        </article>
      </section>
    </main>
  );
};

export default Home;
