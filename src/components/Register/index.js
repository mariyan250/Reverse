// React and Style
import React, { useState } from 'react';
import './index.scss';

// Router
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Register!');
  }

  return (
    <main className="register vh-100 d-flex flex-column p-5 my-0 mx-auto">
      <form className="d-flex flex-column justify-content-center" onSubmit={handleRegister}>
        <h2 className="text-center mt-4 mb-5 mt-md-2">Sign Up</h2>

        <div className="row">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" value={name}
            onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="row">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="row">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="row">
          <label htmlFor="rePassword">Repeat Password</label>
          <input type="password" name="rePassword" value={rePassword}
            onChange={(e) => setRePassword(e.target.value)} required />
        </div>

        <button className="auth-button">Submit</button>

        <Link to="/login"
          className="login-btn mt-4 mb-3 align-self-end text-decoration-none"
        >Already have an account?</Link>
      </form>
    </main>
  );
};

export default Register;