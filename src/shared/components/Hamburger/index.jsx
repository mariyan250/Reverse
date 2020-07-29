// React and Style
import React from 'react';
import styles from './index.module.scss';

function Hamburger({ isOpen, onClick }) {
  return (
    <section onClick={onClick}>
      <article
        className={`${styles.hamburger} ${
          isOpen && styles.toggled
        } d-flex flex-column justify-content-between`}
      >
        <span className={`app-bg-white rounded-pill`}></span>
        <span className={`app-bg-white align-self-end rounded-pill`}></span>
        <span className={`app-bg-white align-self-end rounded-pill`}></span>
      </article>
    </section>
  );
}

export default Hamburger;
