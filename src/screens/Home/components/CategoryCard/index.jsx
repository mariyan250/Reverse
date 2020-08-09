// React and Style
import React from 'react';
import styles from './index.module.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Router
import { Link } from 'react-router-dom';

function CategoryCard({ url, icon, title }) {
  const { t } = useTranslation();

  return (
    <Link to={url} className={`${styles.card} d-block box-shadow text-center py-2 py-md-4`}>
      <img src={icon} className="mt-2" alt={t('home.categories.img_alt')} />
      <p className="app-text-secondary mt-3 mb-0">{t(title)}</p>
    </Link>
  );
}

export default CategoryCard;
