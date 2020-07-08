// React and Style
import React from 'react';
import './index.scss';

const Card = ({ iconName, text }) => {
  return (
    <section className="option-card d-flex flex-column">
      <i class={`${iconName} align-self-center `}></i>
      <h2 className="option-text mt-4 text-center ">{text}</h2>
    </section>
  );
};

export default Card;
