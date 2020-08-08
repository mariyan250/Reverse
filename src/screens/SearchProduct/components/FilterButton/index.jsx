// React and Style
import React from 'react';
import './index.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import FilterDropdown from '../FilterDropdown';

function FilterButton({ isOpen, onClick, role }) {
  const { t } = useTranslation();

  return (
    <button
      className="filter-button d-flex justify-content-center align-items-center position-relative box-shadow rounded p-2 border-0 app-bg-white"
      onClick={onClick}
      role={role}
      aria-label="filter products"
    >
      <p>{t('search.filter_button')}</p>
      <i className={`fas fa-angle-down ml-3 ${isOpen && 'toggle'}`} />
      {isOpen && <FilterDropdown />}
    </button>
  );
}

export default FilterButton;
