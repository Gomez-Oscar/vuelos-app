import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./home.scss";
import flechas from "../../assets/icons/flechas-derecha-izquierda.png";
import flechaDerecha from "../../assets/icons/flecha-derecha.png";
import avatar from "../../assets/icons/avatar.png";
import tipoHaciento from "../../assets/icons/tipo-de-hacientos-icon.png";
import flechaDespliegue from "../../assets/icons/flecha-despliegue.png";
import buttonLupa from "../../assets/icons/Button-lupa.png";
import dateIcon from "../../assets/icons/date-icon.png";
import mapAvion from "../../assets/img/map-avion.png"

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [returnedDate, setReturnedDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickReturn = (e) => {
    e.preventDefault();
    setOpen(!Open);
  };

  return (
    <>
      <main className="container__principal">
        <h1 className="find__your__flight">Find your flight</h1>
        <section className="container__button">
          <button className="round__trip">
            <img src={flechas} alt="flechas" />
            Round trip
          </button>
          <button className="one__way">
            <img src={flechaDerecha} alt="flecha__derecha" />
            One way
          </button>
          <button className="cantidad__personas">
            <img src={avatar} alt="" />1 <img src={flechaDespliegue} alt="" />
          </button>
          <button className="economy">
            <img src={tipoHaciento} alt="" />
            Economy <img src={flechaDespliegue} alt="" />
          </button>
        </section>
        <nav className="lugar__destino">
          <div className="lugar__destino__from">
            <h1>From</h1>
            <input
              className="lugar__destino__input"
              type="text"
              placeholder="Houston (HOU)"
            />
          </div>
          <img className="lugar__destino__flechas" src={flechas} alt="" />
          <div className="lugar__destino__where">
            <h1>To</h1>
            <input
              className="lugar__destino__input"
              type="text"
              placeholder="Where is your destination?"
            />
          </div>
          <button className="button__lupa">
            <img src={buttonLupa} alt="" />
          </button>
        </nav>
        <section className="calendar">
          <button className="calendar__Departure__date" onClick={handleClick}>
            <img className="date__icon" src={dateIcon} alt="" />
            Departure date
          </button>
          {isOpen && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              open={isOpen}
              inline
            />
          )}
          <button className="calendar__Returned__date" onClick={handleClickReturn}>
            <img className="date__icon" src={dateIcon} alt="" />
            Returned date
          </button>
          {Open && (
            <DatePicker className="container__calendar"
              selected={returnedDate}
              onChange={(date) => setReturnedDate(date)}
              open={Open}
              inline
            />
          )}
        </section>
        <aside className="mapAvion">
          <img className="img__map" src={mapAvion} alt="" />
        </aside>
      </main>
    </>
  );
};

export default Home;
