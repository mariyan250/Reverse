// React and Style
import React from 'react';
import './index.scss';

function Hamburger({ className, onClick }) {
  return (
    <section className={className} onClick={onClick}>
      <article className="hamburger d-flex flex-column justify-content-between">
        <span className="app-bg-white rounded-pill"></span>
        <span className="app-bg-white align-self-end rounded-pill"></span>
        <span className="app-bg-white align-self-end rounded-pill"></span>
      </article>
    </section>
  );
}

export default Hamburger;
