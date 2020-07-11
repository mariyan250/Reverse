// React and Style
import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function AuthModal({ className, isToggle }) {
  const Modal = (
    <section className={className}>
      <article className='auth-modal d-flex flex-column justify-content-between align-items-center'>
        <Link
          to='/login'
          className='auth-link w-100 d-flex justify-content-center align-items-center'>
          Login
        </Link>
        <Link
          to='/register'
          className='auth-link w-100  d-flex justify-content-center align-items-center'>
          Register
        </Link>
      </article>
    </section>
  );

  return isToggle ? Modal : null;
}

export default AuthModal;
