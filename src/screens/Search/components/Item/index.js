// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

function Item(props) {
  const { t } = useTranslation();

  return (
    <li className="item app-bg-white box-shadow" {...props}>
      <section className="img-container d-flex justify-content-center overflow-hidden position-relative">
        <img
          src={props.img}
          alt={t('search_screen.item.img.alt')}
          className="img-fluid position-absolute"
        />
      </section>

      <section className="p-3">
        <h2 className="my-3 text-center">{props.name}</h2>
        <p className="m-0 mt-5 mb-2 font-weight-light">
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
    </li>
  );
}

export default Item;
