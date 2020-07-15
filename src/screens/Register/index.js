// React and style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'shared/constants/routes';

// Translation
import { useTranslation } from 'react-i18next';

// Components
import Input from 'shared/components/auth/Input';
import Button from 'shared/components/auth/Button';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { t } = useTranslation();

  const inputs = [
    {
      name: 'username',
      label: t('register_screen.inputs.labels.username'),
      type: 'text',
      value: username,
      required: true,
      onChange(e) {
        setUsername(e.target.value);
      },
    },
    {
      name: 'email',
      label: t('register_screen.inputs.labels.email'),
      type: 'email',
      value: email,
      required: true,
      onChange(e) {
        setEmail(e.target.value);
      },
    },
    {
      name: 'password',
      label: t('register_screen.inputs.labels.password'),
      type: 'password',
      value: password,
      required: true,
      onChange(e) {
        setPassword(e.target.value);
      },
    },
    {
      name: 'rePassword',
      label: t('register_screen.inputs.labels.re_password'),
      type: 'password',
      value: rePassword,
      required: true,
      onChange(e) {
        setRePassword(e.target.value);
      },
    },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Register');
  };

  return (
    <main className="register vh-100 d-flex flex-column justify-content-center py-5 px-4 my-0 mx-auto">
      <form className="d-flex flex-column justify-content-center" onSubmit={handleRegister}>
        <h1 className="text-center mb-5">{t('register_screen.heading')}</h1>
        {inputs.map((input) => (
          <section className="mb-4">
            <Input {...input} />
          </section>
        ))}
        <Button text={t('register_screen.button')} />
        <Link
          to={routes.login}
          className="register-btn app-text-secondary mt-4 mb-3 align-self-end text-decoration-none"
        >
          {t('register_screen.option_button')}
        </Link>
      </form>
    </main>
  );
};

export default Register;
