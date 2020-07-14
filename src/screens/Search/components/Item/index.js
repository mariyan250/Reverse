// React and Style
import React from 'react';
import './index.scss';

function Item(props) {
  return (
    <li className="item d-flex mb-5 flex-column justify-content-center" {...props}>
      <img src={props.img} alt="" className="img-fluid" />
      <div className="d-flex flex-column p-3 px-4">
        <h2 className="mt-2 mb-3 text-center">{props.name}</h2>
        <p className="my-3 font-weight-light">
          <i className="fas fa-map-marker-alt mr-2" />
          {props.location}
        </p>
        <div className="d-flex justify-content-between align-items-center w-100">
          <p className="m-0">
            <i className="fas fa-clock mr-2" />8 July - 18:00
          </p>
          <h4 className="">{props.price}</h4>
        </div>
      </div>
    </li>
  );
}

export default Item;
