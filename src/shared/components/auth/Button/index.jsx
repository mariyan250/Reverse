// React and style
import React from 'react';
import styles from './index.module.scss';

function Button({ text, onClick, className }) {
  return (
    <section className={`${styles.button} ${className}`}>
      <button className={`app-bg-primary border-0 app-text-white w-100 p-2`} onClick={onClick}>
        {text}
      </button>
    </section>
  );
}

export default Button;
