// React and style
import React from 'react';
import './index.scss';

function Button({ text, onClick }) {
  return (
    <button className="auth-btn app-bg-primary border-0 app-text-white mt-4 p-2" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
