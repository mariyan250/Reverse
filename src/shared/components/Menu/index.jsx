// React and Style
import React from 'react';
import styles from './index.module.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Router
import { NavLink } from 'react-router-dom';

function Menu({ links }) {
  const { t } = useTranslation();

  return (
    <ul className={`${styles.menu} app-bg-black-transparent`}>
      {links.map((link, i) => (
        <li className="d-flex" key={i}>
          <NavLink
            to={link.to}
            className="d-flex w-100 justify-content-center align-items-center app-text-white app-bg-black-transparent py-4"
          >
            <i className={`${link.iconName} mr-3`} />
            {t(link.text)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
