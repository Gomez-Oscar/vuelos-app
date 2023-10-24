import React from 'react';
import './booking.scss';
import { useForm } from 'react-hook-form';
import EsteperComponent from '../booking/EsteperComponent';
import identity from '../../assets/icons/identity-icon.svg';
import contact from '../../assets/icons/contact-icon.svg';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <main className='contenedor-main'>
        <h1 className='text-booking'> My booking</h1>
        <EsteperComponent />
        <div className='contenedor-details'>
          <h1 className='text-details'>Pasenger details </h1>
          <p className='text-ID'>
            Name as on ID card/passport without title and punctuation
          </p>
        </div>
        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
          <div className='contenedor-name'>
            <div className='content-nombre'>
              <label className='texto'> Name</label>
              <input className='input' type='text' {...register('nombre')} />
            </div>
            <div className='content-nombre'>
              <label className='texto'> Surname</label>
              <input className='input' type='text' {...register('Surname')} />
            </div>
          </div>
          <div className='contenedorDetails'>
            <div className='content-Title'>
              <label className='texto'> Title</label>
              <input className='inpuTitle' type='text' {...register('Title')} />
            </div>
            <div className='content-Title'>
              <label className='texto'>Birthday</label>
              <input
                className='inpuTitle'
                type='date'
                {...register('Birthday')}
              />
            </div>
            <div className='content-Title'>
              <label className='texto'>Nationality</label>
              <select className='inpuTitle' {...register('Nationality')}>
                <option value='es'> España </option>
                <option value='it'> Italia </option>
                <option value='es'> España </option>
                <option value='fr'> Francia </option>
                <option value='co'> Colombia </option>
              </select>
            </div>
          </div>
          <div className='imgText'>
            <img className='imgIcon' src={identity} />
            <h1 className='TextIdentity'> Identity</h1>
          </div>
          <div className='content-passport'>
            <p className='textPassport'>
              Passport valid for at least 6 months from departure date is
              required for international travel or transit abroa. Make sure that
              the passengers name is exactly as written in the government issued
              ID/Passport/Driving License. Avoid any mistake, because some
              airlines dont allow name corrections after booking.
            </p>
          </div>

          <div className='content-number'>
            <label className='texto'> Passport number </label>
            <input
              className='inputPassport'
              type='text'
              {...register('Passport')}
            />
          </div>
          <div className='contenedor-name'>
            <div className='content-nombre'>
              <label className='texto'> Country of Issue</label>
              <select className='input' {...register('country')}>
                <option value='es'> España </option>
                <option value='it'> Italia </option>
                <option value='es'> España </option>
                <option value='fr'> Francia </option>
                <option value='co'> Colombia </option>
              </select>
            </div>
            <div className='content-nombre'>
              <label className='texto'> Passport Expiry Date</label>
              <input className='input' type='date' name='' />
            </div>
          </div>

          <div className='imgText'>
            <img className='imgIcon' src={contact} />
            <h1 className='textIcon'> Contact details</h1>
          </div>
          <div className='contenedor-name'>
            <div>
              <label className='texto'> Name</label>
              <input className='input' type='text' {...register('Name')} />
            </div>
            <div>
              <label className='texto'> Surname</label>
              <input className='input' type='text' {...register('Surname')} />
            </div>
          </div>
          <div className='contenedorDetails'>
            <div className='content-Title'>
              <label className='texto'> Title</label>
              <input className='inpuTitle' type='text' {...register('Title')} />
            </div>
            <div className='content-Title'>
              <label className='texto'> Email</label>
              <input
                className='inpuTitle'
                type='email'
                {...register('Email')}
              />
            </div>
            <div className='content-Title'>
              <label className='texto'> Phone number</label>
              <input
                className='inpuTitle'
                type='number'
                {...register('Phone')}
              />
            </div>
          </div>
          <input
            className='buttonEnviar'
            type='submit'
            value='Enviar'
            onClick={() => navigate('/tickets')}
          />
        </form>
      </main>
    </>
  );
};

export default Formulario;
