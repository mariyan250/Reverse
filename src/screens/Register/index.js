// React and style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Components
import Input from 'shared/components/auth/Input';
import Button from 'shared/components/auth/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Register!');
  };

  return (
    <main className='register vh-100 d-flex flex-column justify-content-center py-5 px-4 my-0 mx-auto'>
      <form
        className='d-flex flex-column justify-content-center'
        onSubmit={handleRegister}>
        <h2 className='text-center mt-4 mb-5 mt-md-2'>Sign Up</h2>

        <section className='mb-4 mt-2'>
          <Input
            name='username'
            label='Full Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </section>

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

        <section className='mb-4'>
          <Input
            name='rePassword'
            label='Repeat Password'
            type='password'
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            required
          />
        </section>

        <Button text='Submit' />

        <Link
          to='/login'
          className='login-btn mt-4 mb-3 align-self-end text-decoration-none'>
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export default Register;
