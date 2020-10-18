// React and Style
import React, { useState } from 'react';
import styles from './index.module.scss';

// Router
import { useHistory } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const { t } = useTranslation();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(searchQuery !== '' ? `/search?q=${searchQuery}` : '/');
  };

  return (
    <form className={`${styles.form} w-100 mx-auto`} aria-label="search" onSubmit={handleSubmit}>
      <div className="d-flex">
        <input
          type="text"
          placeholder={t('home.input.placeholder')}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          aria-label="search"
          data-testid="searchInput"
        />

        <div>
          <button
            className={`${
              searchQuery ? 'app-bg-primary' : 'app-bg-secondary'
            } h-100 border-0 d-flex justify-content-center align-items-center`}
            aria-label="search"
          >
            <i className="fas fa-search app-text-white" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
