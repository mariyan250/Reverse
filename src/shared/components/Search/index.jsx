// React and Style
import React, { useState } from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  return (
    <form action="/search" className="search-form w-100 mx-auto">
      <article className="d-flex">
        <input
          type="text"
          name="query"
          placeholder={t('home_screen.input.placeholder')}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          required
        />

        <article>
          <button
            className={`h-100 border-0 ${
              searchQuery ? 'app-bg-primary' : 'app-bg-secondary'
            } d-flex justify-content-center align-items-center`}
          >
            <i className="fas fa-search app-text-white" />
          </button>
        </article>
      </article>
    </form>
  );
}

export default Search;
