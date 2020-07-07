// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Components
import AuthInput from '../AuthInput';
import AuthButton from '../AuthButton';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, email, password, rePassword });
  }

  return (
    <main className="register vh-100 d-flex flex-column py-5 px-4 my-0 mx-auto">
      <form className="d-flex flex-column justify-content-center" onSubmit={handleRegister}>
        <h2 className="text-center mt-4 mb-5 mt-md-2">Sign Up</h2>

        <AuthInput name="username" label="Full Name" type="text"
          onChange={(e) => setName(e.target.value)} value={name} required />

        <AuthInput name="email" label="Email" type="email"
          onChange={(e) => setEmail(e.target.value)} value={email} />

        <AuthInput name="password" label="Password" type="password"
          onChange={(e) => setPassword(e.target.value)} value={password} />

        <AuthInput name="rePassword" label="Repeat Password" type="password"
          onChange={(e) => setRePassword(e.target.value)} value={rePassword} />

        <AuthButton text="Submit" />

        <Link to="/login"
          className="login-btn mt-4 mb-3 align-self-end text-decoration-none"
        >Already have an account?</Link>
      </form>
    </main>
  );
};

export default Register;