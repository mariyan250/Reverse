// React and style
import React from 'react';
import './index.scss';

// Components
import Item from '../Item';

function ItemList({ items }) {
  return (
    <ul className="item-list">{items && items.map((item) => <Item {...item} key={item.id} />)}</ul>
  );
}

export default ItemList;
