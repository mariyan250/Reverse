// React and Style
import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function CategoryCard(props) {
  return (
    <section {...props}>
      <article className="category-card">
        <Link
          to={props.url}
          className="category-link d-flex flex-column justify-content-center align-items-center h-100 text-decoration-none"
        >
          <i className={props.icon} />
          <p className="position-relative">{props.title}</p>
        </Link>
      </article>
    </section>
  );
}

export default CategoryCard;
