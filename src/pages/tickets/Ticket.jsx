import React from "react";
import "../../pages/tickets/ticket.scss";
import EsteperComponent from "./stepper";
import viñetaIcon from "../../assets/icons/viñeta-icon.svg";
import nubeIcon from "../../assets/icons/nube-icon.svg";
import maletinIcon from "../../assets/icons/maletin-icon.svg";
import claseIcon from "../../assets/icons/clase-icon.svg";
import ovaloIcon from "../../assets/icons/Ovalo-icon.svg";
import lineIcon from "../../assets/icons/Line-icon.svg";
import timeIcon from "../../assets/icons/time-icon.svg";
import codigoBarras from "../../assets/icons/codigo-barras.png";
import avionIcon from "../../assets/icons/avion-icon.svg";
import codigoBarrasHorizontal from "../../assets/icons/codigo-barras-horizontal.png";
import simboloPeso from "../../assets/icons/simbolo-plata-icon.svg";

const Ticket = () => {
  return (
    <>
      <main className="ticket__container">
        <h1 className="ticket__container__title">My booking</h1>
        <EsteperComponent />
        <div className="ticket__container__viñet">
          <img src={viñetaIcon} alt="" />
          <h2 className="ticket__container__viñetaicon">
            Your flight is booked sucessflly!
          </h2>
        </div>
        <h3 className="ticket__container__present">
          Present E-ticket and valid indentification at check-in
        </h3>
        <section className="container__detalles">
          <span className="container__cloudy">
            <img className="container__cloudy__nube" src={nubeIcon} alt="" />
            <h5 className="container__cloudy__airlines">Cloudy Airlines</h5>
          </span>
          <span className="container__maletin">
            <img className="container__maletin__img" src={maletinIcon} alt="" />
            <h5 className="container__maletin__peso1">2x23kg</h5>
            <h5 className="container__maletin__peso2">1x7kg</h5>
          </span>
          <h3 className="Passenger">
            Passenger:
            <h2 className="Passenger__nombre">
              <strong>ANNA ANDERSON</strong>
            </h2>
          </h3>
          <img className="clase__icon" src={claseIcon} alt="" />
          <h3 className="clase__economy">Economy</h3>
          <section className="container__hours">
            <div>
              <h2 className="container__hours__hour1">23:15</h2>
              <h3 className="container__hours__destino1">Houston (HOU)</h3>
              <h4 className="container__hours__fecha1">9 Feb, 2023</h4>
            </div>
            <div>
              <h2 className="container__hours__hour2">1:25</h2>
              <h3 className="container__hours__destino2">Las Vegas (LAS)</h3>
              <h4 className="container__hours__fecha2">10 Feb, 2023</h4>
            </div>
            <img className="oval__icon1" src={ovaloIcon} alt="" />
            <img className="line__icon" src={lineIcon} alt="" />
            <img className="oval__icon2" src={ovaloIcon} alt="" />
            <img className="time__icon" src={timeIcon} alt="" />
            <h4 className="time__hour">2h10m</h4>
            <img className="codigo__barras" src={codigoBarras} alt="" />
            <p className="check">Check-in: 10th Feb 2023 at 1:40</p>
            <p className="all__time">*All time displayed are local</p>
            <aside className="container__ticket">
              <header className="container__header">
                <img
                  className="container__header__avion__icon"
                  src={avionIcon}
                  alt=""
                />
                <h2 className="container__header__eflight">E-flight</h2>
              </header>
              <article className="container__booking">
                <h2 className="container__booking__id">Booking ID</h2>
                <h3 className="container__booking__numero">65980165 </h3>
              </article>
              <article className="container__airline">
                <h2 className="container__airline__title">
                  Airline Booking Code
                </h2>
                <h3 className="container__airline__codigo">CA-6018</h3>
              </article>
              <img
                className="barras__horizontal"
                src={codigoBarrasHorizontal}
                alt=""
              />
            </aside>
            {/* segundo detalle */}
          </section>
        </section>
        <section className="container__detalles">
          <span className="container__cloudy">
            <img className="container__cloudy__nube" src={nubeIcon} alt="" />
            <h5 className="container__cloudy__airlines">Cloudy Airlines</h5>
          </span>
          <span className="container__maletin">
            <img className="container__maletin__img" src={maletinIcon} alt="" />
            <h5 className="container__maletin__peso1">2x23kg</h5>
            <h5 className="container__maletin__peso2">1x7kg</h5>
          </span>
          <h3 className="Passenger">
            Passenger:
            <h2 className="Passenger__nombre">
              <strong>ANNA ANDERSON</strong>
            </h2>
          </h3>
          <img className="clase__icon" src={claseIcon} alt="" />
          <h3 className="clase__economy">Economy</h3>
          <section className="container__hours">
            <div>
              <h2 className="container__hours__hour1">2:25</h2>
              <h3 className="container__hours__destino1">Las Vegas</h3>
              <h4 className="container__hours__fecha1">10 Feb, 2023</h4>
            </div>
            <div>
              <h2 className="container__hours__hour2">7:40</h2>
              <h3 className="container__hours__destino2">Los Angeles</h3>
              <h4 className="container__hours__fecha2">10 Feb, 2023</h4>
            </div>
            <img className="oval__icon1" src={ovaloIcon} alt="" />
            <img className="line__icon" src={lineIcon} alt="" />
            <img className="oval__icon2" src={ovaloIcon} alt="" />
            <img className="time__icon" src={timeIcon} alt="" />
            <h4 className="time__hour">5h15m</h4>
            <img className="codigo__barras" src={codigoBarras} alt="" />
            <p className="check">Check-in: 10th Feb 2023 at 1:40</p>
            <p className="all__time">*All time displayed are local</p>
            <aside className="container__ticket">
              <header className="container__header">
                <img
                  className="container__header__avion__icon"
                  src={avionIcon}
                  alt=""
                />
                <h2 className="container__header__eflight">E-flight</h2>
              </header>
              <article className="container__booking">
                <h2 className="container__booking__id">Booking ID</h2>
                <h3 className="container__booking__numero">65980165 </h3>
              </article>
              <article className="container__airline">
                <h2 className="container__airline__title">
                  Airline Booking Code
                </h2>
                <h3 className="container__airline__codigo">CA-6018</h3>
              </article>
              <img
                className="barras__horizontal"
                src={codigoBarrasHorizontal}
                alt=""
              />
            </aside>
          </section>
          <button className="send__to__my">Send to my e-mail</button>
          <article className="container__details">
            <header className="container__header__details">
              <img className="container__details__simbolo___peso" src={simboloPeso} alt="" />
              <h1 className="container__details__price">Price details</h1>
            </header>
          </article>
          <article></article>
        </section>
      </main>
    </>
  );
};

export default Ticket;
