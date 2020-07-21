// React and style
import React from 'react';
import './index.scss';

function Input({ name, label, type, required, onChange }) {
  return (
    <section className="auth-input">
      <label htmlFor={name}>{label}</label>
      <input className="p-1" type={type} name={name} required={required} onChange={onChange} />
    </section>
  );
}

export default Input;