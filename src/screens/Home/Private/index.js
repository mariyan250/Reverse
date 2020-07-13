// React and style
import React from 'react';
import './index.scss';

// Components
import Header from 'shared/components/Header';

const HomePrivate = () => {
  return (
    <main className='home-private'>
      <Header />
      <h1 className='text-center'>Home Logged!</h1>
    </main>
  );
};

export default HomePrivate;
