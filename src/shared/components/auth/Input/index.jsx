// React and style
import React from 'react';
import styles from './index.module.scss';

function Input({ name, label, type, required, onChange, testId }) {
  return (
    <div className={`${styles.input}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`p-1`}
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        data-testid={testId}
      />
    </div>
  );
}

export default Input;
