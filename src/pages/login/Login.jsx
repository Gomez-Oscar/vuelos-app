import React from 'react';
import getUserByEmailAndPassword from '../../services/userService';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Swal from 'sweetalert2';
import './login.scss';

let schema = object({
  email: string().email().required('required field'),
  password: string().required('required field'),
});

const Login = () => {
  const findUser = async values => {
    const userFound = await getUserByEmailAndPassword(
      values.email,
      values.password
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
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      findUser(values);
      actions.resetForm({});
    },
  });

  return (
    <main className='login__container'>
      <h1 className='login_title'>Good to see you again</h1>
      <form className='login_form' onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.email} className='formControl'>
          <FormLabel>Your email</FormLabel>
          <Input
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.password} className='formControl'>
          <FormLabel>Your password</FormLabel>
          <Input
            type='password'
            className='input'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <button type='submit'>Sign In</button>
        <a className='create_account_link'>Don't have an account?</a>
      </form>
    </main>
  );
};

export default Login;
