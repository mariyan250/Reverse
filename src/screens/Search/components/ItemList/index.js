// React and style
import React from 'react';
import './index.scss';

// Translations
import { useTranslation } from 'react-i18next';

// Components
import Item from '../Item';

function ItemList({ items }) {
  const { t } = useTranslation();

  return (
    <section className="item-list px-4">
      <h2>{t('search_screen.heading')}</h2>
      <ul className="app-bg-gray-darker pt-5 px-4">
        {items && items.map((item) => <Item {...item} key={item.id} />)}
      </ul>
    </section>
  );
}

export default ItemList;
