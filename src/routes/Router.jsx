import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Detalles from "../pages/detalles-vuelo/detalles.jsx"

export const AppContext = createContext({});

const Router = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userLogged, setUserLogged] = useState({});

  const globalState = {
    isUserLogged,
    setIsUserLogged,
    userLogged,
    setUserLogged,
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppContext.Provider value={globalState}>
          <Routes>
            <Route element={<Layout />}>
             <Route element={<PrivateRoutes isAuthenticate={isUserLogged} />}>
                <Route path='/home' element={<Home />} />
              </Route>
              <Route element={<PublicRoutes isAuthenticate={isUserLogged} />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Route> 
            </Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Router;
