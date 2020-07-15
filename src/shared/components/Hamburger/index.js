// React and Style
import React from 'react';
import './index.scss';

// krastavici?
function Hamburger(props) {
  return (
    <section {...props}>
      <article className="hamburger d-flex flex-column justify-content-between">
        <span></span>
        <span></span>
        <span></span>
      </article>
    </section>
  );
}

export default Hamburger;
