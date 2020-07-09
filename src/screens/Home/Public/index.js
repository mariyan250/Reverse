// React and style
import React from 'react';
import './index.scss';

// Components
import Card from './components/Card';
import Arrow from './components/Arrow';

const Home = () => {
  return (
    <main className='home'>
      <section className='home-intro'>
        <section className='black-layer d-flex flex-column justify-content-center align-items-center vh-100'>
          <h2 className='text-center font-weight-bold'>
            Welcome to
            <span className='d-inline-block px-2 my-2 ml-md-3'>Reverse</span>
          </h2>
          <h3 className='text-center mt-1 mb-5'>Sell your items now!</h3>
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
