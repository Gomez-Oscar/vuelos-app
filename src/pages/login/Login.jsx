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
import { sweetAlert } from '../../utils/alerts';

import './login.scss';

const Login = () => {
  const schema = object({
    email: string().email().required('required field'),
    password: string().required('required field'),
  });

  const findUser = async values => {
    const userFound = await getUserByEmailAndPassword(
      values.email,
      values.password
    );

    userFound
      ? sweetAlert('success', `Welcome back ${userFound.name}`)
      : sweetAlert('error', 'Wrong credentials');
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
