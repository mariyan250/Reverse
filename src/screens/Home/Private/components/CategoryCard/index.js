// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function CategoryCard({ className, url, icon, title }) {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <article className="category-card py-4 box-shadow">
        <Link
          to={url}
          className="category-link d-flex flex-column justify-content-center align-items-center text-decoration-none app-text-secondary"
        >
          <img src={icon} className="mt-2" alt={t('home_screen.private.categories.img_alt')} />
          <p className="position-relative">{title}</p>
        </Link>
      </article>
    </section>
  );
}

export default CategoryCard;
