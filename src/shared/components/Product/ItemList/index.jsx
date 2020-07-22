// React and style
import React from 'react';
import './index.scss';

// Components
import Item from '../Item';

function ItemList({ items }) {
  return (
    <section className="item-list">
      <ul className="app-bg-gray-darker pt-5 px-4">
        {items && items.map((item) => <Item {...item} key={item.id} />)}
      </ul>
    </section>
  );
}

export default ItemList;
