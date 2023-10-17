import React from 'react';
import { useNavigate } from 'react-router-dom';

import avionIcon from '../../assets/icons/avion-icon.svg';
import buscadorIcon from '../../assets/icons/buscador-icon.svg';
import campanaIcon from '../../assets/icons/campana-icon.svg';
// import avatarIcon from '../../assets/icons/avatar-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';

import './header.scss';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');

  return (
    <>
      <header className='header__container'>
        <img src={avionIcon} className='avion__icon' alt='avion__icon' />
        <p className='text__header'>E-flight</p>
        <button className='button__login' onClick={goToLogin}>
          Login
        </button>
        <p className='usd'>USD</p>
        <img
          src={buscadorIcon}
          className='buscador__icon'
          alt='buscador__icon'
        />
        <img src={campanaIcon} className='campana__icon' alt='campana__icon' />
        <img src={userIcon} className='user__icon' alt='user__icon' />
      </header>
    </>
  );
};

export default Home;
