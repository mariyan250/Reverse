// React and style
import React from 'react';
import './index.scss';

function Arrow(props) {
  return (
    <section className={props.className}>
      <section className="arrow d-flex flex-column">
        <article className="row d-flex mb-3">
          <span className="app-bg-white"></span>
          <span className="app-bg-white"></span>
        </article>
        <article className="row d-flex mb-3">
          <span className="app-bg-white"></span>
          <span className="app-bg-white"></span>
        </article>
        <article className="row d-flex">
          <span className="app-bg-white"></span>
          <span className="app-bg-white"></span>
        </article>
      </section>
    </section>
  );
}

export default Arrow;
