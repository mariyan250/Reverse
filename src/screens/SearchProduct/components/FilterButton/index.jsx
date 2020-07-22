// React and Style
import React from 'react';
import './index.scss';

// Components
import FilterDropdown from '../FilterDropdown';

function FilterButton() {
  return (
    <section className="filter-button">
      <span className="box-shadow rounded d-flex py-2 px-3 justify-content-center align-items-center position-relative">
        <p>Filter</p>
        <i className="fas fa-angle-down ml-3" />

        <section className="filter-dropdown-menu">
          <FilterDropdown />
        </section>
      </span>
    </section>
  );
}

export default FilterButton;
