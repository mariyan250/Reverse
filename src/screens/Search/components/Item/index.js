// React and Style
import React from 'react';
import './index.scss';

function Item(props) {
  return (
    <section {...props}>
      <article className="item p-2 d-flex flex-column justify-content-center align-items-center">
        <h2>{props.name}</h2>
        <img src={props.img} alt="" width="200px" />
        <h4>{props.price}</h4>
      </article>
    </section>
  );
}

export default Item;
