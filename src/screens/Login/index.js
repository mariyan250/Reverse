// React and style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Input from 'shared/components/auth/Input';
import Button from 'shared/components/auth/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login!');
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
    },
  ];

  return (
    <main className="login d-flex vh-100 align-items-center justify-content-center px-4">
      <form onSubmit={handleLogin} className="d-flex flex-column">
        <h1 className="text-center mb-5">{t('login_screen.heading')}</h1>
        {inputs.map((input) => (
          <section className="mb-4">
            <Input {...input} />
          </section>
        ))}
        <Button text={t('login_screen.button')} />
        <Link
          to="/register"
          className="login-btn app-text-secondary mt-4 align-self-end text-decoration-none"
        >
          {t('login_screen.option_button')}
        </Link>
      </form>
    </main>
  );
};

export default Login;
