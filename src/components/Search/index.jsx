// React and Style
import React, { useState } from 'react';
import styles from './index.module.scss';

// Translation
import { useTranslation } from 'react-i18next';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const { t } = useTranslation();

  return (
    <form action="/search" className={`${styles.form} w-100 mx-auto`}>
      <div className="d-flex">
        <input
          type="text"
          name="query"
          placeholder={t('home.input.placeholder')}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          required
          data-testid="searchInput"
        />

        <div>
          <button
            className={`${
              searchQuery ? 'app-bg-primary' : 'app-bg-secondary'
            } h-100 border-0 d-flex justify-content-center align-items-center`}
          >
            <i className="fas fa-search app-text-white" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;