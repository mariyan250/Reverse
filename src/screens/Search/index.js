// React and Style
import React, { useState, useEffect } from 'react';
import './index.scss';

import items from './items.json';

// Components
import Header from 'shared/components/Header';
import Item from './components/Item';

function Search({ location: { search } }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = search.split('=')[1];
    const itemsMatch = items.filter((item) => item.category === query);
    setData(itemsMatch);
  }, [search]);

  return (
    <main className="search">
      <Header />
      <h2 className="mb-4 mx-4">Items</h2>
      <section className="items px-5">
        {data && data.map((item) => <Item {...item} className="my-4" key={item.id} />)}
      </section>
    </main>
  );
}

export default Search;
