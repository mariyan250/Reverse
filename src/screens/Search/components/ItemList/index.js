// React and style
import React from 'react';
import './index.scss';

// Components
import Item from '../Item';

// translations?
function ItemList({ items }) {
  return (
    <section className="item-list container-fluid px-4">
      <h2>Items</h2>
      <ul className="row pt-5 pb-1">
        {items && items.map((item) => <Item {...item} key={item.id} />)}
      </ul>
    </section>
  );
}

export default ItemList;
