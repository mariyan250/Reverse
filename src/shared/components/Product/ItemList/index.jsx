// React and style
import React from 'react';
import './index.scss';

// Translations
import { useTranslation } from 'react-i18next';

// Components
import Item from '../Item';

function ItemList({ items, title }) {
  const { t } = useTranslation();

  return (
    <section className="item-list">
      <h1 className="mb-4 text-center">{t(title)}</h1>
      <ul className="app-bg-gray-darker pt-5 px-4">
        {items && items.map((item) => <Item {...item} key={item.id} />)}
      </ul>
    </section>
  );
}

export default ItemList;
