// React and Style
import React from 'react';
import './index.scss';

// Router and Routes
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'shared/constants/routes';

// Redux
import { connect } from 'react-redux';
import { toggleHamburger } from 'store/actions/hamburger';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Hamburger from 'shared/components/Hamburger';
import Menu from 'shared/components/Menu';

function Header(props) {
  const { t } = useTranslation();

  const links = [
    { to: routes.dashboard, text: 'header.links.home' },
    { to: routes.login, text: 'header.links.login' },
    { to: routes.register, text: 'header.links.register' },
  ];

  return (
    <header className="app-bg-secondary position-sticky px-4 px-md-5 d-flex justify-content-between align-items-center">
      <Link to="/">
        <h1 className="app-text-white">{t('header.heading')}</h1>
      </Link>

      <ul className="d-none d-md-flex h-100 align-items-center m-0">
        {links.map((link) => (
          <li className="ml-5 h-100">
            <NavLink
              to={link.to}
              className="app-text-white h-100 d-flex justify-content-center align-items-center"
            >
              {t(link.text)}
            </NavLink>
          </li>
        ))}
      </ul>

      <Hamburger
        className={`d-md-none ${props.burgerOpened ? 'toggled' : ''}`}
        onClick={() => props.toggleHamburger(!props.burgerOpened)}
      />

      {props.burgerOpened && (
        <Menu className="header-menu position-fixed d-md-none w-100" links={links} />
      )}
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerOpened: state.hamburger.isOpen,
  };
};

export default connect(mapStateToProps, { toggleHamburger })(Header);
