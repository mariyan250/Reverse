// React and Style
import React from 'react';
import './index.scss';

const Button = (props) => {
  return (
    <button className="auth-btn" {...props}>
      {props.text}
    </button>
  );
};

export default Button;
