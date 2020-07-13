// React and Style
import React from 'react';
import './index.scss';

// Router
import { NavLink } from 'react-router-dom';

function Menu(props) {
  return (
    <section {...props}>
      <article className="menu">
        <ul className="d-flex flex-column w-100 h-100">
          <li className="d-flex">
            <NavLink
              to="/dashboard"
              className="menu-link d-flex justify-content-center align-items-center text-decoration-none"
              activeClassName="link-active"
            >
              <i className="fas fa-home mr-3" />
              Home
            </NavLink>
          </li>

          <li className="d-flex">
            <NavLink
              to="/login"
              className="menu-link d-flex justify-content-center align-items-center text-decoration-none"
              activeClassName="link-active"
            >
              <i className="fas fa-folder mr-3" />
              My Items
            </NavLink>
          </li>

          <li className="d-flex">
            <NavLink
              to="/register"
              className="menu-link d-flex justify-content-center align-items-center text-decoration-none"
              activeClassName="link-active"
            >
              <i className="fas fa-envelope mr-3" />
              Messages
            </NavLink>
          </li>

          <li className="d-flex">
            <NavLink
              to="/register"
              className="menu-link d-flex justify-content-center align-items-center text-decoration-none"
              activeClassName="link-active"
            >
              <i className="fas fa-cog mr-3" />
              Settings
            </NavLink>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Menu;
