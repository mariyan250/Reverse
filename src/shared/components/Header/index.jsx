// React and Style
import React from 'react';
import styles from './index.module.scss';

// Redux
import { connect } from 'react-redux';
import { toggleHamburger, closeHamburger } from 'store/actions/hamburger';
import { removeUser } from 'store/actions/user';

// Translation
import { useTranslation } from 'react-i18next';

// Router and Routes
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'shared/constants/routes';

// Components
import Hamburger from 'shared/components/Hamburger';
import Menu from 'shared/components/Menu';

function Header(props) {
  const { t } = useTranslation();

  const publicLinks = [
    { to: routes.home, text: 'header.links.home' },
    { to: routes.login, text: 'header.links.login' },
    { to: routes.register, text: 'header.links.register' },
  ];

  const privateLinks = [
    { to: routes.home, text: 'header.links.home' },
    { to: routes.profile, text: 'header.links.profile' },
  ];

  const handleLogout = () => {
    props.removeUser();
    window.location = '/';
  };

  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center app-bg-secondary position-sticky px-4 px-md-5`}
    >
      <Link to="/">
        <span className="app-text-white">{t('header.heading')}</span>
      </Link>

      <ul className="d-none d-md-flex h-100 align-items-center m-0">
        {(props.user ? privateLinks : publicLinks).map((link, i) => (
          <li className="ml-5 h-100" key={i}>
            <NavLink
              to={link.to}
              className="d-flex justify-content-center align-items-center app-text-white h-100"
            >
              {t(link.text)}
            </NavLink>
          </li>
        ))}

        {props.user && (
          <li
            className="ml-3 py-2 px-3 app-bg-secondary app-text-white border-0"
            onClick={handleLogout}
            data-testid="logout"
          >
            {t('header.logout_btn')}
          </li>
        )}
      </ul>

      <div className="d-md-none">
        <Hamburger
          onClick={() => props.toggleHamburger(!props.burgerOpened)}
          isOpen={props.burgerOpened}
        />
      </div>

      {props.burgerOpened && (
        <Menu
          className={`${styles.menu} position-fixed d-md-none w-100`}
          links={props.user ? privateLinks : publicLinks}
        />
      )}
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerOpened: state.hamburger.isOpen,
    user: state.user,
  };
};

export default connect(mapStateToProps, { toggleHamburger, removeUser, closeHamburger })(Header);
