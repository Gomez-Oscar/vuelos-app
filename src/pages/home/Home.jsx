import React, { useState, useEffect } from 'react';
import { getFlights } from '../../services/vuelosService';
import useFilter from '../../components/hooks/useFilter';

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

  console.log('departure:', new Date(startDate).toLocaleDateString());
  // console.log('returned:', new Date(returnedDate).toLocaleDateString());

  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const [hideReturnDatebutton, setHideReturnDatebutton] = useState(false);

  const { filters, filterResult, responseFilter, setFilters, handleFilter } =
    useFilter();

  const [flights, setFlights] = useState({});

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

  useEffect(() => {
    getFlights().then(response => {
      setFlights(response);
      // console.log(flights);
      setFilters({ ...filters });
    });
  }, []);

  const handleOriginAndDestinaion = event => handleFilter(event, flights);

  const handleDatePicker = date => {
    const event = {
      target: {
        name: 'fecha_salida',
        value: date.toLocaleDateString(),
      },
    };
    setStartDate(date);
    handleFilter(event, flights);
  };

  console.log(filterResult);
  // console.log(responseFilter);

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
              <option value={''}>1 pasajero</option>
              <option value={''}>2 pasajeros</option>
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
              name='origen'
              onChange={handleOriginAndDestinaion}
              value={filters.origen || ''}
            />
          </div>
          <img className='lugar__destino__flechas' src={flechasNegras} alt='' />
          <div className='lugar__destino__where'>
            <h1>To</h1>
            <input
              className='lugar__destino__input'
              type='text'
              placeholder='Where is your destination?'
              name='destino'
              onChange={handleOriginAndDestinaion}
              value={filters.destino || ''}
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
                selected={startDate}
                onChange={date => handleDatePicker(date)}
                open={isOpen}
                inline
                name='fecha_salida'
                value={filters.fecha_salida || ''}
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
          {Open && (
            <div className='datepicker__container'>
              <DatePicker
                selected={returnedDate}
                onChange={date => setReturnedDate(date)}
                open={Open}
                inline
              />
            </div>
          )}
        </section>
        <aside className='mapAvion'>
          <img className='img__map' src={mapAvion} alt='' />
        </aside>
      </main>
    </>
  );
};

export default Home;
