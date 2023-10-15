import React from 'react';
import avionIcon from '../../assets/icons/avion-icon.svg';
import buscadorIcon from '../../assets/icons/buscador-icon.svg';
import campanaIcon from '../../assets/icons/campana-icon.svg';
import avatarIcon from '../../assets/icons/avatar-icon.svg';

import './header.scss';

const Home = () => {
  return (
    <>
      <header className='header__container'>
        <img src={avionIcon} className='avion__icon' alt='avion__icon' />
        <p className='text__header'>E-flight</p>
        <p className='usd'>USD</p>
        <img
          src={buscadorIcon}
          className='buscador__icon'
          alt='buscador__icon'
        />
        <img src={campanaIcon} className='campana__icon' alt='campana__icon' />
        <img src={avatarIcon} className='avatar__icon' alt='avatar__icon' />
      </header>
    </>
  );
};

export default Home;
