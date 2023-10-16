import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <main className='login__container'>
      <h1 className='login_title'>Good to see you again</h1>
      <form className='login_form'>
        <label>Your email</label>
        <input type='email' placeholder='e.g. elon@tesla.com' />
        <label>Your password</label>
        <input type='password' placeholder='e.g. xxxxxxxxxx' />
        <button type='submit'>Sign In</button>
      </form>
    </main>
  );
};

export default Login;
