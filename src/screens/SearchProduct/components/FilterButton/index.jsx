// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import FilterDropdown from '../FilterDropdown';

function FilterButton({ isOpen, onClick }) {
  const { t } = useTranslation();

  return (
    <section className="filter-button" onClick={onClick} data-testid="filter-button">
      <button className="box-shadow rounded d-flex p-2 justify-content-center align-items-center position-relative border-0 app-bg-white">
        <p>{t('search_screen.filter_button')}</p>
        <i className={`fas fa-angle-down ml-3 ${isOpen && 'toggle'}`} />
        {isOpen && <FilterDropdown />}
      </button>
    </section>
  );
}

export default FilterButton;
