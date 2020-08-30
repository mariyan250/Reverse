// React and style
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

// Redux
import { connect } from 'react-redux';
import { closeHamburger } from 'store/actions/hamburger';

// Router and Routes
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Input from 'components/auth/Input';
import Button from 'components/auth/Button';

function Register({ closeHamburger }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    closeHamburger();
  }, [closeHamburger]);

  const inputs = [
    {
      name: 'username',
      label: t('register.inputs.labels.username'),
      type: 'text',
      value: username,
      required: true,
      onChange: (e) => setUsername(e.target.value),
      testId: 'usernameInput',
    },
    {
      name: 'email',
      label: t('register.inputs.labels.email'),
      type: 'email',
      value: email,
      required: true,
      onChange: (e) => setEmail(e.target.value),
      testId: 'emailInput',
    },
    {
      name: 'password',
      label: t('register.inputs.labels.password'),
      type: 'password',
      value: password,
      required: true,
      onChange: (e) => setPassword(e.target.value),
      testId: 'passwordInput',
    },
    {
      name: 'rePassword',
      label: t('register.inputs.labels.re_password'),
      type: 'password',
      value: rePassword,
      required: true,
      onChange: (e) => setRePassword(e.target.value),
      testId: 'rePasswordInput',
    },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <main className="px-4">
      <form onSubmit={handleRegister} className={`${styles.form} mx-auto`} data-testid="form">
        <h1 className="text-center mb-5">{t('register.heading')}</h1>

        {inputs.map((input, i) => (
          <div className="mb-4" key={i}>
            <Input {...input} />
          </div>
        ))}

        <div className="mt-5">
          <Button text={t('register.button')} />
        </div>

        <Link to={routes.login} className="app-text-secondary mt-4 d-inline-block">
          {t('register.option_button')}
        </Link>
      </form>
    </main>
  );
}

export default connect(null, { closeHamburger })(Register);
