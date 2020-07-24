// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// TODO use translation for currency
function Item({ id, images, name, location, date, price }) {
  const { t } = useTranslation();

  return (
    <li className="item app-bg-white box-shadow overflow-hidden">
      <Link to={`/item/${id}`} className="app-text-secondary">
        <section className="img-container d-flex overflow-hidden position-relative">
          <img
            src={images[0]}
            alt={t('search_screen.item.img.alt')}
            className="img-fluid position-absolute p-3"
          />
        </section>

        <section className="p-3 h-100 app-bg-gray-darker">
          <p className="product-name text-center mb-4">{name}</p>
          <p className="product-location mb-3">
            <i className="fas fa-map-marker mr-2" />
            {location}
          </p>
          <p className="product-date mb-3">
            <i className="fas fa-clock mr-2" />
            {date}
          </p>
          <p className="product-price mt-1">{price}$</p>
        </section>
      </Link>
    </li>
  );
}

export default Item;
