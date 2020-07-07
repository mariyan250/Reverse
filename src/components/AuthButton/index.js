// React and Style
import React from 'react';
import './index.scss';

const AuthButton = (props) => {
  return (
    <button className="auth-btn" {...props}>{props.text}</button>
  );
};

export default AuthButton;