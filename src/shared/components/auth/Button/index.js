// React and style
import React from 'react';
import './index.scss';

function Button(props) {
  return (
    <button className='auth-btn' {...props}>
      {props.text}
    </button>
  );
}

export default Button;
