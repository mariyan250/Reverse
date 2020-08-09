// React and Style
import React from 'react';
import styles from './index.module.scss';

function Hamburger({ isOpen, onClick }) {
  return (
    <button
      className={`${styles.hamburger} ${
        isOpen && styles.toggled
      } d-flex flex-column justify-content-between border-0 bg-transparent`}
      onClick={onClick}
      data-testid="hamburger"
      aria-label="toggle menu"
    >
      <span className="app-bg-white rounded-pill"></span>
      <span className="app-bg-white align-self-end rounded-pill"></span>
      <span className="app-bg-white align-self-end rounded-pill"></span>
    </button>
  );
}

export default Hamburger;
