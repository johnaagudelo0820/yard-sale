import React from 'react';

import '@styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input input-email"
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>

          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Login"
            className="primary-button login-button"
          />
          <a href="/">forgot my password</a>
        </form>
        <button className="secundary-button">Sign up </button>
      </div>
    </div>
  );
};

export default Login;
