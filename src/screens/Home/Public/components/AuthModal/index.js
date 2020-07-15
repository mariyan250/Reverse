// React and Style
import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function AuthModal({ className = '' }) {
  const links = [
    { title: 'Login', route: '/login' },
    { title: 'Register', route: '/register' },
  ];

  return (
    <section className={className}>
      <article className="auth-modal d-flex flex-column justify-content-between align-items-center">
        {links.map((link) => (
          <Link
            to={link.route}
            className="auth-link w-100 d-flex justify-content-center align-items-center"
          >
            {link.title}
          </Link>
        ))}
      </article>
    </section>
  );
}

export default AuthModal;
