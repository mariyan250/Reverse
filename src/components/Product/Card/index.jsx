// React and Style
import React from 'react';
import styles from './index.module.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function Item({ id, images, name, price, stars }) {
  const { t } = useTranslation();

  return (
    <li className={`${styles.item} app-bg-white overflow-hidden rounded-lg`}>
      <Link to={`/item/${id}`} className="app-text-secondary">
        <div className={`${styles.container} d-flex position-relative justify-content-center`}>
          <img
            src={images[0]}
            alt={t('search_screen.item.img.alt')}
            className={`${styles.img} img-fluid position-absolute p-5`}
          />
        </div>

        <div className="p-2 h-100">
          <div className="p-3 app-bg-gray-darkest rounded-lg">
            <p className={`${styles['item-name']} mb-2`}>{name}</p>

            <div className={`${styles['item-stars']} mb-3`}>
              {Array(stars)
                .fill()
                .map(() => (
                  <i className="fas fa-star"></i>
                ))}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <p class={`${styles['item-price']} app-text-primary`}>
                {price} {t('general.currency')}
              </p>

              <button className="border-0 py-3 px-4 py-md-2 px-md-3 app-text-white rounded-lg app-bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Item;
