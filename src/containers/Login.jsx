import React, { useRef } from 'react';

import '@styles/Login.scss';

const Login = () => {
  const formRef = useRef(null);

  const handlerSumit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={formRef}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handlerSumit}
          >
            Login
          </button>
          <a href="/">forgot my password</a>
        </form>
        <button className="secundary-button" onClick={handlerSumit}>
          Sign up{' '}
        </button>
      </div>
    </div>
  );
};

export default Login;
