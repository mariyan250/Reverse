// React
import React, { useState, useEffect } from 'react';

// Mock data
import items from './items.json';

// Components
import Header from 'shared/components/Header';
import ItemList from './components/ItemList';

function Search({ location: { search } }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = search.split('=')[1];
    const itemsMatch = items.filter(
      (item) => item.category === query || item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setData(itemsMatch);
  }, [search]);

  return (
    <main className="search">
      <Header />
      <ItemList items={data} />
    </main>
  );
}

export default Search;
