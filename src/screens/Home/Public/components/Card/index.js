// React and Style
import React from 'react';
import './index.scss';

const Card = ({ iconName, text }) => {
  return (
    <section className="option-card d-flex flex-column">
      <i class={`${iconName} align-self-center`}></i>
      <h2 className="mt-4 option-text">{text}</h2>
    </section>
  );
};

export default Card;
