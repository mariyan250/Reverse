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

function Register() {
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
    <main className={`d-flex vh-100 align-items-center justify-content-center px-4 mx-auto`}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h1 className={`text-center mb-5`}>{t('register_screen.heading')}</h1>

        {inputs.map((input, i) => (
          <section className={`mb-4`} key={i}>
            <Input {...input} />
          </section>
        ))}

        <section className={`mt-5`}>
          <Button text={t('register_screen.button')} />
        </section>

        <Link to={routes.login} className={`app-text-secondary mt-4 mb-5 d-inline-block`}>
          {t('register_screen.option_button')}
        </Link>
      </form>
    </main>
  );
}

export default Register;
