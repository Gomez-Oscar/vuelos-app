import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userService';
import Swal from 'sweetalert2';
import './register.scss';

const Register = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({});

  const backToLogin = () => navigate('/login');

  const reset = () => {
    setDataForm({});
  };

  const handleChangeInputs = event => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const createdUser = await createUser(dataForm);

    if (createdUser) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Register was successful',
        text: 'You can now login to your account',
        showConfirmButton: false,
        timer: 2000,
      });
      backToLogin();
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There was an error creating your account',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };

  return (
    <main className='register__container'>
      <h1 className='register_title'>Create an account</h1>
      <form className='register_form' onSubmit={handleSubmit}>
        <label>Your name</label>
        <input
          type='text'
          name='name'
          value={dataForm.name || ''}
          onChange={handleChangeInputs}
        />
        <label>Your email</label>
        <input
          type='email'
          name='email'
          value={dataForm.email || ''}
          onChange={handleChangeInputs}
        />
        <label>Your password</label>
        <input
          type='password'
          name='password'
          value={dataForm.password || ''}
          onChange={handleChangeInputs}
        />
        <button type='submit'>Register</button>
        <a className='back_to_login_link' onClick={backToLogin}>
          Come back to login
        </a>
      </form>
    </main>
  );
};

export default Register;
