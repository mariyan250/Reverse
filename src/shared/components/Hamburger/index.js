// React and Style
import React from 'react';
import './index.scss';

function Hamburger({ className, onClick }) {
  return (
    <section className={className} onClick={onClick}>
      <article className="hamburger d-flex flex-column justify-content-between">
        <span></span>
        <span></span>
        <span></span>
      </article>
    </section>
  );
}

export default Hamburger;
