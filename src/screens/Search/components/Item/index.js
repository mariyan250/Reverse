// React and Style
import React from 'react';
import './index.scss';
//8 July - 18:00 do not hardcode
// remove $ from json file
// >>> $ should go to translation (with arguments)
function Item(props) {
  return (
    <li
      className="item d-flex mb-5 p-1 mx-2 flex-column justify-content-center col-12 col-sm-6 col-md-3"
      {...props}
    >
      <div className="img-container d-flex overflow-hidden position-relative">
        <img src={props.img} alt="" className="img-fluid d-block w-100 position-absolute" />
      </div>
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
          <h4>{props.price}</h4>
        </div>
      </div>
    </li>
  );
}
// price - h4?
export default Item;
