import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './home.scss';
import flechasNegras from '../../assets/icons/flechas-negras.svg';
import flechasVerdes from '../../assets/icons/flechas-verdes.svg';
import flechaDerechaVerde from '../../assets/icons/flecha-derecha-verde.svg';
import flechaDerechaNegra from '../../assets/icons/flecha-derecha-negra.svg';
import avatar from '../../assets/icons/avatar.png';
import tipoHaciento from '../../assets/icons/tipo-de-hacientos-icon.png';
import buttonLupa from '../../assets/icons/Button-lupa.png';
import dateIcon from '../../assets/icons/date-icon.png';
import mapAvion from '../../assets/img/map-avion.png';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [returnedDate, setReturnedDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const [hideReturnDatebutton, setHideReturnDatebutton] = useState(false);

  const handleOneWayClick = () => {
    setHideReturnDatebutton(true);
  };
  const handleRoundTripClick = () => {
    setHideReturnDatebutton(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickReturn = () => {
    setOpen(!Open);
  };

  return (
    <>
      <main className='container__principal'>
        <h1 className='find__your__flight'>Find your flight</h1>
        <section className='container__button'>
          <button
            className={
              !hideReturnDatebutton ? 'round__trip active' : 'round__trip'
            }
            onClick={handleRoundTripClick}
          >
            {hideReturnDatebutton ? (
              <img src={flechasNegras} alt='flechas' />
            ) : (
              <img src={flechasVerdes} alt='flechas' />
            )}
            Round trip
          </button>
          <button
            className={hideReturnDatebutton ? 'one__way active' : 'one__way'}
            onClick={handleOneWayClick}
          >
            {hideReturnDatebutton ? (
              <img
                src={flechaDerechaVerde}
                alt='flecha__derecha'
                className='flecha__derecha'
              />
            ) : (
              <img
                src={flechaDerechaNegra}
                alt='flecha__derecha'
                className='flecha__derecha'
              />
            )}
            One way
          </button>
          <button className='cantidad__personas'>
            <img src={avatar} alt='' />
            <select className='pasajero'>
              <option value={''}>Pasajeros</option>
            </select>
          </button>
          <button className='economy'>
            <img src={tipoHaciento} alt='' />
            <select className='clase'>
              <option value={''}>Clase</option>
            </select>
          </button>
        </section>
        <nav className='lugar__destino'>
          <div className='lugar__destino__from'>
            <h1>From</h1>
            <input
              className='lugar__destino__input'
              type='text'
              placeholder='Houston (HOU)'
            />
          </div>
          <img className='lugar__destino__flechas' src={flechasNegras} alt='' />
          <div className='lugar__destino__where'>
            <h1>To</h1>
            <input
              className='lugar__destino__input'
              type='text'
              placeholder='Where is your destination?'
            />
          </div>
          <button className='button__lupa'>
            <img src={buttonLupa} alt='' />
          </button>
        </nav>
        <section className='calendar'>
          <button className='calendar__Departure__date' onClick={handleClick}>
            <img className='date__icon' src={dateIcon} alt='' />
            Departure date
          </button>
          {isOpen && (
            <div className='datepicker__container'>
              <DatePicker
                className='DatePicker'
                selected={startDate}
                onChange={date => setStartDate(date)}
                open={isOpen}
                // inline
              />
            </div>
          )}
          {!hideReturnDatebutton && (
            <button
              className='calendar__Returned__date'
              onClick={handleClickReturn}
            >
              <img className='date__icon' src={dateIcon} alt='' />
              Returned date
            </button>
          )}
          <div className='datepicker__container'>
            {Open && (
              <DatePicker
                selected={returnedDate}
                onChange={date => setReturnedDate(date)}
                open={Open}
                // inline
              />
            )}
          </div>
        </section>
        <aside className='mapAvion'>
          <img className='img__map' src={mapAvion} alt='' />
        </aside>
      </main>
    </>
  );
};

export default Home;
