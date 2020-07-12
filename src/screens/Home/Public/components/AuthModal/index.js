// React and Style
import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function AuthModal({ className = '' }) {
  const linkStyle = 'auth-link w-100 d-flex justify-content-center align-items-center';

  return (
    <section className={className}>
      <article className='auth-modal d-flex flex-column justify-content-between align-items-center'>
        <Link to='/login' className={linkStyle}>
          Login
        </Link>
        <Link to='/register' className={linkStyle}>
          Register
        </Link>
      </article>
    </section>
  );
}

export default AuthModal;
