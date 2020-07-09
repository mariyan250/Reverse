// React and Style
import React from 'react';
import './index.scss';

const Arrow = (props) => {
  return (
    <section className={props.className}>
      <section className='arrow d-flex flex-column'>
        <article className='row d-flex mb-3'>
          <span></span>
          <span></span>
        </article>
        <article className='row d-flex mb-3'>
          <span></span>
          <span></span>
        </article>
        <article className='row d-flex'>
          <span></span>
          <span></span>
        </article>
      </section>
    </section>
  );
};

export default Arrow;
