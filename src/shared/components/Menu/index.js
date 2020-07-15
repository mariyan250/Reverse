// React and Style
import React from 'react';
import './index.scss';

// Router
import { NavLink } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

function Menu(props) {
  const { t } = useTranslation();

  const links = [{ to: routes.dashboard, iconName: 'fas fa-home', text: t('menu.links.home') }];

  return (
    <section {...props}>
      <article className="menu app-bg-black-transparent">
        <ul className="d-flex flex-column w-100 h-100">
          {links.map((link) => (
            <li className="d-flex">
              <NavLink
                to={link.to}
                className="menu-link d-flex justify-content-center align-items-center text-decoration-none app-text-white app-bg-black-transparent py-4"
              >
                <i className={`${link.iconName} mr-3`} />
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Menu;
