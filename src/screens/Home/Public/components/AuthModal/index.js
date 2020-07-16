// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

function AuthModal({ className }) {
  const { t } = useTranslation();

  const links = [
    { title: 'home_screen.public.auth_modal.links.login', route: routes.login },
    { title: 'home_screen.public.auth_modal.links.register', route: routes.register },
  ];

  return (
    <section className={className}>
      <article className="auth-modal overflow-hidden app-bg-white rounded">
        {links.map((link) => (
          <Link to={link.route} className="d-block text-center app-text-primary py-3">
            {t(link.title)}
          </Link>
        ))}
      </article>
    </section>
  );
}

export default AuthModal;
