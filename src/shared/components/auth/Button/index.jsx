// React and style
import React from 'react';
import styles from './index.module.scss';

function Button({ text, onClick }) {
  return (
    <button
      className={`${styles.button} app-bg-primary border-0 app-text-white w-100 p-2`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </button>
  );
}

export default Button;
