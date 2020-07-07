// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

// Components
import AuthInput from '../AuthInput';
import AuthButton from '../AuthButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <main className="login d-md-flex">
      <section className="login-intro">
        <section
          className="black-layer d-flex flex-column justify-content-center align-items-center vh-100"
        >
          <h2 className="text-center font-weight-bold"> Welcome to
          <span className="d-inline-block px-2 my-2 ml-md-3">Reverse</span>
          </h2>
          <h3 className="text-center mt-1 mb-5">Sell your items now!</h3>
        </section>
      </section>

      <aside className="aside align-items-center align-self-center px-4 py-5">
        <form onSubmit={handleLogin} className="d-flex flex-column justify-content-center px-md-2">
          <h2 className="text-center my-5">Sign In</h2>

          <section className="mb-3">
            <AuthInput name="email" label="Email" type="email"
              onChange={(e) => setEmail(e.target.value)} value={email} required />
          </section>
          <section className="mb-3">
            <AuthInput name="password" label="Password" type="password"
              onChange={(e) => setPassword(e.target.value)} value={password} required />
          </section>

          <AuthButton text="Submit" />

          <Link to="/register"
            className="register-btn  mt-4 align-self-end text-decoration-none"
          >Don't have an account?</Link>
        </form>
      </aside>
    </main >
  );
};

export default Login;