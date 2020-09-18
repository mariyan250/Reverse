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
import { NavLink, Link, useHistory } from 'react-router-dom';
import { routes } from 'constants/routes';

// Components
import Hamburger from 'components/Hamburger';
import Menu from 'components/Menu';

function Header(props) {
  const { t } = useTranslation();
  const history = useHistory();

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
    history.push('/');
  };

  return (
    <header className={`${styles.header} app-bg-secondary position-sticky`}>
      <div
        className={`${styles['header-content']} d-flex d-flex justify-content-between align-items-center h-100 mx-auto px-4 px-md-5`}
      >
        <Link to="/">
          <span className="app-text-white">{t('header.heading')}</span>
        </Link>

        <ul className="d-none d-md-flex justify-content-between align-items-center h-100 m-0">
          {(props.user ? privateLinks : publicLinks).map((link, i) => (
            <li className="ml-5" key={i}>
              <NavLink
                to={link.to}
                className="d-flex justify-content-center align-items-center app-text-white"
                activeClassName={styles.active}
              >
                {t(link.text)}
              </NavLink>
            </li>
          ))}

          {props.user && (
            <li className="ml-5">
              <button
                onClick={handleLogout}
                className="border-0 bg-transparent app-text-white d-flex align-items-end"
                data-testid="logout"
                aria-label="logout button"
              >
                <i className="fas fa-sign-out-alt h-100" />
              </button>
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
          <div className={`${styles.menu} d-md-none position-fixed w-100`}>
            <Menu links={props.user ? privateLinks : publicLinks} />
          </div>
        )}
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  burgerOpened: state.hamburger.isOpen,
  user: state.user,
});

export default connect(mapStateToProps, { toggleHamburger, removeUser, closeHamburger })(Header);
