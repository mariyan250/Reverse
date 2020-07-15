// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function AuthModal({ className = '' }) {
  const { t } = useTranslation();

  const links = [
    { title: t('home_screen.public.auth_modal.links.login'), route: '/login' },
    { title: t('home_screen.public.auth_modal.links.register'), route: '/register' },
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
