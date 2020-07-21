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
      <h4 className="mt-4">{t(title)}</h4>
    </section>
  );
}

export default Card;
