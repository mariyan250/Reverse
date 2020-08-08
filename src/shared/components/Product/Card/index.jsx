// React and Style
import React from 'react';
import styles from './index.module.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function Item({ id, images, name, location, date, price }) {
  const { t } = useTranslation();

  return (
    <li className={`${styles.item} app-bg-white box-shadow overflow-hidden`}>
      <Link to={`/item/${id}`} className={`app-text-secondary`}>
        <div
          className={`${styles.container} d-flex overflow-hidden position-relative justify-content-center`}
        >
          <img
            src={images[0]}
            alt={t('search_screen.item.img.alt')}
            className={`${styles.img} img-fluid position-absolute p-5`}
          />
        </div>

        <div className={`py-3 px-4 h-100 app-bg-gray`}>
          <p className={`${styles.name} text-center mb-4`}>{name}</p>
          <p className={`mb-3`}>
            <i className={`fas fa-map-marker-alt mr-2`} />
            {location}
          </p>
          <p className={`mb-4`}>
            <i className={`fas fa-clock mr-2`} />
            {date}
          </p>
          <p className={`${styles.price}`}>
            {price} {t('general.currency')}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default Item;
