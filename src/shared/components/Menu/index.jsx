// React and Style
import React from 'react';
import styles from './index.module.scss';

// Router
import { NavLink } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

function Menu(props) {
  const { t } = useTranslation();

  return (
    <section {...props}>
      <article className={`${styles.menu} app-bg-black-transparent`}>
        <ul>
          {props.links.map((link) => (
            <li className={`d-flex`}>
              <NavLink
                to={link.to}
                className={`d-flex w-100 justify-content-center align-items-center app-text-white app-bg-black-transparent py-4`}
              >
                <i className={`${link.iconName} mr-3`} />
                {t(link.text)}
              </NavLink>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Menu;
