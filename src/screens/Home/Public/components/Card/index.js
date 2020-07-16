// React and style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

function Card({ iconName, title }) {
  const { t } = useTranslation();

  return (
    <section className="option-card text-center">
      <i className={`${iconName}`}></i>
      <h2 className="mt-4">{t(title)}</h2>
    </section>
  );
}

export default Card;
