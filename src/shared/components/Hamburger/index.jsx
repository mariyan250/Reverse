// React and Style
import React from 'react';
import styles from './index.module.scss';

function Hamburger({ isOpen, onClick }) {
  return (
    <section
      className={`${styles.hamburger} ${
        isOpen && styles.toggled
      } d-flex flex-column justify-content-between`}
      onClick={onClick}
      data-testid="hamburger"
    >
      <span className={`app-bg-white rounded-pill`}></span>
      <span className={`app-bg-white align-self-end rounded-pill`}></span>
      <span className={`app-bg-white align-self-end rounded-pill`}></span>
    </section>
  );
}

export default Hamburger;
