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

      <section className='one py-5'>
        <hr className='mb-5 mx-auto' />
        <article className='d-md-flex flex-column px-2'>
          <h2 className='mt-2 mb-md-5 text-center'>Description</h2>
          <article className='d-flex flex-column flex-lg-row justify-content-between'>
            <p className='my-5 mx-2 my-lg-0'>
              Reverse is not just a platform for selling items with ease, but
              also a social network for people with same interests and needs.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut fuga ipsam! Consectetur illum, ex odit alias dignissimos sint
              ea impedit beatae vitae asperiores quos? Autem nesciunt odit vero
              eos!
            </p>
            <img
              src='/img/cloths.jpg'
              alt=''
              className='img-fluid align-self-center'
            />
          </article>
        </article>
      </section>

      <section className='two py-0 bg-primary'>
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
