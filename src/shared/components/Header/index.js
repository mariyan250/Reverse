// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { NavLink } from 'react-router-dom';

// Components
import Hamburger from 'shared/components/Hamburger';
import Menu from 'shared/components/Menu';

function Header() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
    <section className="header px-4 py-3 d-flex justify-content-between align-items-center">
      <h1>Reverse</h1>

      <ul className="d-none d-md-flex h-100 align-items-center m-0">
        <li className="ml-5">
          <NavLink to="/dashboard" className="link" activeClassName="active-link">
            <i className="fas fa-columns mr-3" />
            Dashboard
          </NavLink>
        </li>

        <li className="ml-5">
          <NavLink to="/login" className="link" activeClassName="active-link">
            <i className="fas fa-folder mr-3" />
            My Items
          </NavLink>
        </li>

        <li className="ml-5">
          <NavLink to="/register" className="link" activeClassName="active-link">
            <i className="fas fa-user mr-3" />
            Friends
          </NavLink>
        </li>

        <li className="ml-5">
          <NavLink to="/register" className="link" activeClassName="active-link">
            <i className="fas fa-cog mr-3" />
            Settings
          </NavLink>
        </li>
      </ul>

      <Hamburger
        className={`hamburger d-md-none ${burgerOpened ? 'toggled' : ''}`}
        onClick={() => setBurgerOpened(!burgerOpened)}
      />

      {burgerOpened && <Menu className="header-menu position-fixed d-md-none" />}
    </section>
  );
}

export default Header;