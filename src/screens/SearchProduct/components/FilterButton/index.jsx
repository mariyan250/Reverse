// React and Style
import React, { useState } from 'react';
import './index.scss';

// Components
import FilterDropdown from '../FilterDropdown';

function FilterButton() {
  const [open, setOpen] = useState(false);

  return (
    <section className="filter-button" onMouseOver={() => setOpen(!open)}>
      <span className="box-shadow rounded d-flex py-2 px-3 justify-content-between align-items-center position-relative">
        <p>Filter Products</p>
        <i className="fas fa-arrow-down" />
        {open && <FilterDropdown />}
      </span>
    </section>
  );
}

export default FilterButton;
