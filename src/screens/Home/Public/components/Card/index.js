// React and style
import React from 'react';
import './index.scss';

function Card({ iconName, text }) {
  return (
    <section className='option-card d-flex flex-column'>
      <i className={`${iconName} text-center`}></i>
      <h2 className='option-text mt-4 text-center'>{text}</h2>
    </section>
  );
}

export default Card;
