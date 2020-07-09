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

      <section className='two py-0 py-md-5'>
        <article className='py-3 py-md-5 d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around vh-100'>
          <Card iconName='fas fa-check' text='Sell your items.' />
          <Card iconName='fas fa-truck' text='Ship your products.' />
          <Card iconName='fas fa-user' text='Meet new people.' />
        </article>
      </section>
    </main>
  );
};

export default Home;
