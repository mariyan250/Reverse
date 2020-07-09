// React and style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Components
import Input from 'shared/components/auth/Input';
import Button from 'shared/components/auth/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login!');
  };

  return (
    <main className='login d-flex vh-100 align-items-center justify-content-center px-4'>
      <form onSubmit={handleLogin} className='d-flex flex-column w-100'>
        <h2 className='text-center my-5'>Sign In</h2>

        <section className='mb-4'>
          <Input
            name='email'
            label='Email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </section>

        <section className='mb-4'>
          <Input
            name='password'
            label='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </section>

        <Button text='Submit' />

        <Link
          to='/register'
          className='login-btn  mt-4 align-self-end text-decoration-none'>
          Don't have an account?
        </Link>
      </form>
    </main>
  );
};

export default Login;
