// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

function Item(props) {
  const { t } = useTranslation();

  return (
    <li className="item app-bg-white box-shadow d-flex flex-column mb-5 p-2" {...props}>
      <section className="img-container d-flex overflow-hidden position-relative">
        <img
          src={props.img}
          alt={t('search_screen.item.img.alt')}
          className="img-fluid d-block w-100 position-absolute"
        />
      </section>
      <section className="d-flex flex-column p-3 px-4">
        <h2 className="mt-2 mb-3 text-center">{props.name}</h2>
        <p className="my-3 font-weight-light">
          <i className="fas fa-map-marker-alt mr-2" />
          {props.location}
        </p>
        <article className="d-flex justify-content-between align-items-center w-100">
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
