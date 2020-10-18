// React and Style
import React from 'react';
import styles from './index.module.scss';

// Redux
import { connect } from 'react-redux';
import { removeUser } from 'store/actions/user';

// Translation
import { useTranslation } from 'react-i18next';

// Router
import { NavLink, useHistory } from 'react-router-dom';

function Menu({ links, removeUser, user }) {
  const { t } = useTranslation();
  const history = useHistory();

  const handleLogout = () => {
    removeUser();
    history.push('/');
  };

  return (
    <ul className={`${styles.menu} app-bg-black-transparent`}>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.to}
            className="d-flex w-100 justify-content-center align-items-center app-text-white app-bg-black-transparent py-4"
          >
            {t(link.text)}
          </NavLink>
        </li>
      ))}

      {user && (
        <li>
          <button
            onClick={handleLogout}
            data-testid="logout"
            aria-label="logout"
            className="d-flex justify-content-center align-items-center text-center w-100 app-text-white app-bg-black-transparent py-4 border-0"
          >
            {t('header.logout_btn')}
            <i className="fas fa-sign-out-alt ml-3" />
          </button>
        </li>
      )}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { removeUser })(Menu);
