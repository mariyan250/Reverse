// React and Style
import React from 'react';
import './index.scss';

const Input = (props) => {
  return (
    <section className="auth-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} className="auth-input p-1" type={props.type} name={props.name} />
    </section>
  );
};

export default Input;
