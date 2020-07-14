// React and style
import React from 'react';
import './index.scss';

// Components
import Item from '../Item';

function ItemList({ items }) {
  return (
    <section className="item-list container-fluid px-4">
      <h2>Items</h2>
      <ul className="row pt-5 pb-1">
        {items &&
          items.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <Item {...item} />
            </div>
          ))}
      </ul>
    </section>
  );
}

export default ItemList;
