import React, { useState } from 'react';
import getUserByEmailAndPassword from '../../services/userService';
import Swal from 'sweetalert2';
import './login.scss';

const Login = () => {
  const [dataForm, setDataForm] = useState({});

  const reset = () => {
    setDataForm({});
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const userFound = await getUserByEmailAndPassword(
      dataForm.email,
      dataForm.password
    );

    if (userFound) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Welcome back ${userFound.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Wrong credentials`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };

  const handleChangeInputs = event => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <main className='login__container'>
      <h1 className='login_title'>Good to see you again</h1>
      <form className='login_form' onSubmit={handleSubmit}>
        <label>Your email</label>
        <input
          type='email'
          placeholder='e.g. elon@tesla.com'
          name='email'
          value={dataForm.email || ''}
          onChange={handleChangeInputs}
        />
        <label>Your password</label>
        <input
          type='password'
          placeholder='e.g. xxxxxxxxxx'
          name='password'
          value={dataForm.password || ''}
          onChange={handleChangeInputs}
        />
        <button type='submit'>Sign In</button>
        <a className='create_account_link'>Don't have an account?</a>
      </form>
    </main>
  );
};

export default Login;
