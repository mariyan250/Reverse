// React and style
import React, { useState } from 'react';
import styles from './index.module.scss';

// Translation
import { useTranslation } from 'react-i18next';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

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
      label: t('login.inputs.labels.email'),
      type: 'email',
      value: email,
      required: true,
      onChange: (e) => setEmail(e.target.value),
      testId: 'emailInput',
    },
    {
      name: 'password',
      label: t('login.inputs.labels.password'),
      type: 'password',
      value: password,
      required: true,
      onChange: (e) => setPassword(e.target.value),
      testId: 'passwordInput',
    },
  ];

  return (
    <main className="d-flex align-items-center justify-content-center vh-100 px-4">
      <form onSubmit={handleLogin} className={styles.form} data-testid="form">
        <h1 className="text-center mb-5">{t('login.heading')}</h1>

        {inputs.map((input, i) => (
          <div className="mb-4" key={i}>
            <Input {...input} />
          </div>
        ))}

        <div className="mt-5">
          <Button text={t('login.button')} />
        </div>

        <Link to={routes.register} className="app-text-secondary d-inline-block mt-4">
          {t('login.option_button')}
        </Link>
      </form>
    </main>
  );
}

export default Login;
