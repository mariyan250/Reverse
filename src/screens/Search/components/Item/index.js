// React and Style
import React from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function Item(props) {
  const { t } = useTranslation();

  return (
    <li className="item app-bg-white box-shadow" {...props}>
      <Link to={`/item/${props.id}`} className="app-text-secondary">
        <section className="img-container d-flex overflow-hidden position-relative">
          <img
            src={props.images[0]}
            alt={t('search_screen.item.img.alt')}
            className="img-fluid position-absolute"
          />
        </section>

        <section className="p-3">
          <h2 className="my-3 text-center">{props.name}</h2>
          <p className="mt-4 mb-2 font-weight-light">
            <i className="fas fa-map-marker-alt mr-2" />
            {props.location}
          </p>
          <article className="d-flex justify-content-between align-items-end">
            <p className="m-0">
              <i className="fas fa-clock mr-2" />
              {props.date}
            </p>
            <h4>{props.price} $</h4>
          </article>
        </section>
      </Link>
    </li>
  );
}

export default Item;
