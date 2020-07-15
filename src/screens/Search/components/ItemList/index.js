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
    <section className="item-list container-fluid px-4">
      <h2>{t('search_screen.heading')}</h2>
      <ul className="row py-5 app-bg-gray-darker">
        {items && items.map((item) => <Item {...item} key={item.id} />)}
      </ul>
    </section>
  );
}

export default ItemList;
