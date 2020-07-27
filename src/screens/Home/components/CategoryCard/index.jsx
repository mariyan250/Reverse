// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function CategoryCard({ url, icon, title }) {
  const { t } = useTranslation();

  return (
    <Link
      to={url}
      className="category-card py-2 py-md-4 box-shadow d-block text-center"
      data-testid="category-card"
    >
      <img src={icon} className="mt-2" alt={t('home_screen.private.categories.img_alt')} />
      <p className="mt-3 mb-0 app-text-secondary">{t(title)}</p>
    </Link>
  );
}

export default CategoryCard;
