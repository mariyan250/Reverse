// React and style
import React, { useState } from 'react';
import styles from './index.module.scss';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Input from 'shared/components/auth/Input';
import Button from 'shared/components/auth/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      name: 'email',
      label: t('login_screen.inputs.labels.email'),
      type: 'email',
      value: email,
      required: true,
      onChange(e) {
        setEmail(e.target.value);
      },
      role: 'emailInput',
    },
    {
      name: 'password',
      label: t('login_screen.inputs.labels.password'),
      type: 'password',
      value: password,
      required: true,
      onChange(e) {
        setPassword(e.target.value);
      },
      role: 'passwordInput',
    },
  ];

  return (
    <main className={`d-flex vh-100 align-items-center justify-content-center px-4`}>
      <form onSubmit={handleLogin} className={styles.form} role="form">
        <h1 className={`text-center mb-5`}>{t('login_screen.heading')}</h1>

        {inputs.map((input, i) => (
          <section className={`mb-4`} key={i}>
            <Input {...input} />
          </section>
        ))}

        <section className={`mt-5`}>
          <Button text={t('login_screen.button')} />
        </section>

        <Link to={routes.register} className={`app-text-secondary d-inline-block mt-4 mb-3`}>
          {t('login_screen.option_button')}
        </Link>
      </form>
    </main>
  );
}

export default Login;
