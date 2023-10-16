import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const Router = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Router;
