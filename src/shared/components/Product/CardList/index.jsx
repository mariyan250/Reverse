// React and style
import React from 'react';
import styles from './index.module.scss';

// Components
import Item from '../Card';

function ItemList({ items }) {
  return (
    <ul className={styles.list}>
      {items && items.map((item) => <Item {...item} key={item.id} />)}
    </ul>
  );
}

export default ItemList;
