// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="login">
      <section className="login-intro">
        <section className="black-layer">
          <h2>Welcome to <span>Reverse</span></h2>
          <h3>Sell your items now!</h3>
        </section>
      </section>
      <aside className="aside">
        <form action="/login" method="POST">
          <h2>Sign In</h2>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="row">
            <label htmlFor="email">Password</label>
            <input type="password" name="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="auth-button">Submit</button>
          <Link to="/register" className="register-btn">Don't have an account?</Link>
        </form>
      </aside>
    </main >
  );
};

export default Login;