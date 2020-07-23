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
    <li className="item app-bg-white box-shadow">
      <Link to={`/item/${id}`} className="app-text-secondary">
        <section className="img-container d-flex overflow-hidden position-relative">
          <img
            src={images[0]}
            alt={t('search_screen.item.img.alt')}
            className="img-fluid position-absolute"
          />
        </section>

        <section className="p-3">
          <h6 className="my-3 text-center">{name}</h6>
          <p className="mt-4 mb-2 font-weight-light">
            <i className="fas fa-map-marker-alt mr-2" />
            {location}
          </p>
          <article className="d-flex justify-content-between align-items-end">
            <p>
              <i className="fas fa-clock mr-2" />
              {date}
            </p>
            <h4>{price} $</h4>
          </article>
        </section>
      </Link>
    </li>
  );
}

export default Item;
