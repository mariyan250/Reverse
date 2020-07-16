// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { NavLink } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Hamburger from 'shared/components/Hamburger';
import Menu from 'shared/components/Menu';

function Header() {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const { t } = useTranslation();

  const links = [{ to: routes.dashboard, iconName: 'fas fa-home', text: t('header.links.home') }];

  return (
    <header className="header app-bg-secondary position-sticky py-3 px-4 px-md-5 d-flex justify-content-between align-items-center w-100">
      <h1 className="app-text-white">{t('header.heading')}</h1>

      <ul className="d-none d-md-flex h-100 align-items-center m-0">
        {links.map((link) => (
          <li className="ml-5">
            <NavLink to={link.to} className="link app-text-white">
              <i className={`${link.iconName} mr-3`} />
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <Hamburger
        className={`hamburger d-md-none ${burgerOpened ? 'toggled' : ''}`}
        onClick={() => setBurgerOpened(!burgerOpened)}
      />

      {burgerOpened && <Menu className="header-menu position-fixed d-md-none w-100" />}
    </header>
  );
}

export default Header;
