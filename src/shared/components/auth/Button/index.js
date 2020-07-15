// React and style
import React from 'react';
import './index.scss';

// v props krastavici ako doidat kvo she gi praim?
// take only the props that are needed!
function Button(props) {
  return (
    <button className="auth-btn" {...props}>
      {props.text}
    </button>
  );
}

export default Button;
