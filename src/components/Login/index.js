// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login!');
  }

  return (
    <main className="login d-md-flex">
      <section className="login-intro">
        <section
          className="black-layer d-flex flex-column justify-content-center align-items-center vh-100"
        >
          <h2 className="text-center font-weight-bold"> Welcome to
          <span className="d-inline-block pl-2 pr-2 mt-2 mb-2 ml-md-3">Reverse</span>
          </h2>
          <h3 className="text-center mt-1 mb-5">Sell your items now!</h3>
        </section>
      </section>

      <aside className="aside p-md-5 p-4 align-self-center">
        <form onSubmit={handleLogin}
          className="d-flex flex-column justify-content-center"
        >
          <h2 className="text-center mt-5 mb-5">Sign In</h2>

          <div className="row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="auth-button">Submit</button>

          <Link to="/register"
            className="register-btn  mt-4 align-self-end text-decoration-none"
          >Don't have an account?</Link>
        </form>
      </aside>
    </main >
  );
};

export default Login;