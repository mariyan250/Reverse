// React and Style
import React from 'react';
import './index.scss';

const AuthInput = (props) => {
  return (
    <section className="auth-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} className="auth-input p-1" type={props.type} name={props.name} />
    </section>
  );
};

export default AuthInput;