import React from 'react';

import facebookIcon from '../../assets/icons/facebook-icon.svg';
import twiterIcon from '../../assets/icons/twiter-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import avionIcon from '../../assets/icons/avion-icon.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='columna1'>
        <img src={avionIcon} className='avion_icon' alt='avion-icon' />
        <p className='text_E_flight'>E-flight</p>
        <div className='email_input_container'>
          <img src={emailIcon} className='email_icon' alt='email_icon' />
          <input
            type='email'
            className='email_input'
            placeholder='Input your email'
          />
        </div>
        <button className='button_suscribe'>Suscribe</button>
      </div>
      <div className='related_links'>
        <h2 className='about_us'>About us</h2>
        <a className='how_to_book'>How to book</a>
        <a className='help_center'>Help center</a>
      </div>
      <div className='related_links'>
        <h2 className='flight'>Flight</h2>
        <a className='booking_easily'>Booking easily</a>
        <a className='promotions'>Promotions</a>
      </div>
      <div className='related_links'>
        <h2 className='contact_us'>Contact us</h2>
        <img src={facebookIcon} className='facebook_icon' alt='facebook_icon' />
        <img src={twiterIcon} className='twiter_icon' alt='twiter_icon' />
        <img
          src={instagramIcon}
          className='instagram_icon'
          alt='instagram_icon'
        />
      </div>
    </footer>
  );
};

export default Footer;
