import React from 'react'
import imgPortada from "../../assets/img/portada-2pag.png";
import "./detalles.scss";
import flecha from "../../assets/icons/flecha-abajo.svg";
import linea from "../../assets/icons/linea.png";
import flechaarriba from "../../assets/icons/flecha-arriba.svg";
import circulo from "../../assets/icons/circulo.svg"
import filtro from "../../assets/icons/filtro-icon.svg"
import rectangle from "../../assets/icons/Rectangle-icon.svg"
import flechaDerecha from "../../assets/icons/flecha-derecha-verde.svg";
import flechaDespliegue from "../../assets/icons/flecha-despliegue-negra-icon.svg";
import grupo from "../../assets/icons/grupo-icon.svg";
import clase from "../../assets/icons/clase-icon.svg";
import flechaNavegacion from "../../assets/icons/flecha-navegacion-icon.svg";
import flechaDoble from "../../assets/icons/flechas-derecha-izquierda.svg";
import calendario from "../../assets/icons/calendario-icon.svg"
import despliegueDoble from "../../assets/icons/despliegue-doble-icon.svg"
import lupa from "../../assets/icons/lupa-icon.svg"
import lineaVerti from "../../assets/icons/linea-vert-icon.svg"
import calendarioB from "../../assets/icons/calendario-icon-B.svg"
import avionN from "../../assets/icons/avion-icon-n.svg"
import horizonJet from "../../assets/icons/HorizonteJet-icon.svg"
import altitud from "../../assets/icons/Altitud-icon.svg"
import Cloudy from "../../assets/icons/Cloudy-icon.svg"
import lineaGradual from "../../assets/icons/lineagradual-icon.svg"
import etiqueta from "../../assets/icons/etiqueta-icon.svg"
const Detalles = () => {
  return (
    <>
    <main className='main__contenedor'>
        <img src={imgPortada} className='img__portada' alt='' />
        <section className="container_button">
            <button className="one__way">
                <img src={flechaDerecha} alt="flecha__derecha" />
                One way
                <img  src={flechaDespliegue} alt="flecha_despliegue" />
            </button>
            <button className="cantidad__personas">
                <img src={grupo} alt="" /> 
                <select className="pasajero" >
                <option  value={""}>Bebés (debajo de 2 años)</option> 
                <option  value={""}>Niños (2 a 12 años)</option> 
                <option  value={""}>Adultos (mayor de 12 años) </option> 
                </select>
            </button>
            <button className="economy">
                <img className="economy__img" src={clase} alt="" />
                <select className="clase">
                <option value="clase_cabina">Economy</option>
                <option value="clase_cabina">premium economy</option>
                <option value="primera_cabina">Bussiness</option>
                <option value="clase_cabina">First class</option>
                </select>
            </button>
        </section> 
        <nav className="container-navegacion">
            <button className="navegacion"> 
                <img src={flechaNavegacion} alt="flecha__navegacion" />
                    Houston (HOU)
            </button >
            <img className="flecha-doble" src={flechaDoble} alt="flecha-doble" />
            <button className="navegacion-LAX"> 
                <img src={flechaNavegacion} alt="flecha__navegacion" />
                    Los Angeles (LAX)
            </button>
            <button className="navegacion-calendario"> 
                <img src={calendario} alt="" />
                    9/12/2023 - 12/2/2023
                <img src={despliegueDoble} alt="" />    
            </button>
            <img className="lupa" src={lupa} alt="" />

        </nav>
        <div className="contenedor_principal-sort">
            <div className="contenedor-flecha">
                <img className="flecha" src={flecha} alt="flecha" />
                <p className="text-flecha"> Sort by</p>
                <p className="text-reset"> Reset</p>
            </div>

            <img className="linea" src={linea} alt="" />
            <div className="principal-price">
                <div className="contenedor-price">
                    <h3 className="text-price">Price </h3>
                    <img className="price-flecha" src={flechaarriba} alt=""/>
                </div>
                <div className="contenedor-circulo">
                    <div className="contenedor-lowest">
                        <img className="circulo" src={circulo} />
                        <p className="text-Lowest"> Lowest price</p>
                    </div>
                    <div className="contenedor-heighest">
                        <img className="circulo__heighest" src={circulo} />
                        <p className="text-heighest"> Heighest price</p>
                    </div>
                </div>   
            </div>
                <div className="contenedor-secundario-filter">
                    <div className="contenedor-filter">
                        <img className="filtro" src={filtro} alt="" />
                        <h1 className="text-filter"> Filters</h1>
                        <p className="text-reset"> Reset</p>
                    </div>
                    <img className="linea" src={linea} alt="" />
                    <div className="principal-transit">
                        <div className="contenedor-transit">
                            <div className="transit">
                                <h3 className="text-transit">No. of transit </h3>
                                <img className="flecha-transit" src={flechaarriba} alt=""/>
                            </div>
                            <div className="contenedor-rectangle">
                                <div className="contenedor-lowest">
                                    <img className="rectangle" src={rectangle} />
                                    <p className="text-rectangle"> Direct</p>
                                    <p className="value-rectangle"> 30 USD</p>
                                </div>
                                <div className="contenedor-lowest">
                                    <img className="rectangle" src={rectangle} />
                                    <p className="text-rectangle"> 1 transit</p>
                                    <p className="value-rectangle"> 45 USD</p>
                                </div>
                            </div>
                        </div> 
                        <img className="linea" src={linea} alt="" />            
                        <div className="contenedor-transit">
                            <div className="transit">
                                <h3 className="text-transit">Transit point </h3>
                                <img className="flecha-transit" src={flechaarriba} alt=""/>
                            </div>
                            <div className="contenedor-rectangle">
                                <div className="contenedor-lowest">
                                    <img className="rectangle" src={rectangle} />
                                    <p className="text-rectangle"> Osaka (ITM)</p>
                                </div>
                                <div className="contenedor-lowest">
                                    <img className="rectangle" src={rectangle} />
                                    <p className="text-rectangle"> Kuala Lumpur (KUL)</p>
                                </div>
                            </div>
                        </div> 
                        <img className="linea" src={linea} alt="" /> 
                        <div className="contenedor-transit">
                            <div className="transit">
                                <h3 className="text-transit">Transit duration </h3>
                                <img className="flecha-duration" src={flechaarriba} alt=""/>
                            </div>   
                            <img className="imgTransit"src={lineaGradual} alt="" />
                        </div>  
                    </div>  
                </div> 
        </div>
        <section className='contenedor-detalles'>
            <div className='contenedor-fecha'>
                <div className='contenedor-fri'> 
                    <p className='fecha'> Fri, 16 Feb</p>
                    <p className='fecha'> 148 USD</p>
                </div>
                <div className='contenedor-sat'> 
                    <p className='fecha-sat'> Sat, 17 Feb</p>
                    <p className='fecha-sat'> 160 USD</p>
                </div>
                <div className='contenedor-sun'> 
                    <p className='fecha-sun'> Sun, 18 Feb</p>
                    <p className='fecha-sun'> 170.8 USD</p>
                </div>
                <div className='contenedor-mon'> 
                    <p className='fecha-mon'> Mon, 19 Feb</p>
                    <p className='fecha-mon'> 150 USD</p>
                </div>
                <div className='contenedor-tue'> 
                    <p className='fecha-tue'> Tue, 20 Feb</p>
                    <p className='fecha-tue'> 146.5 USD</p>
                </div>
                <div className="contenedor-calendario">
                <img className="lineaverti" src={lineaVerti} />
                <img className="calendario" src={calendarioB} alt="" />
                </div>   
            </div>
            <div className='contenededor-jet'>
                <img className="imgJet" src={horizonJet} alt="" />
                <div className='detalles-jet'>
                    <p>HorizonJet</p>
                    <p>23k kg</p>
                </div>
                <div className="contenedor-hora">
                    <h2 className='horarioJet'> 10:25PM - 7:06AM</h2>
                    <p className='minJet'>10 hr 41 min</p>

                </div>
                <div>
                    <img className="imgLinea"src={lineaGradual} alt="" />
                    <img className="imgAvion" src={avionN} alt="" /><p className="detalles-stop">1 stop</p> 
                </div>
                <div className='detalles-precio'>
                    <h1 className="precio">275.5 USD </h1> <p className="pax">/ pax</p>
                    <button className="choose">Choose</button>
                </div>

            </div>
            <div className='contenededor-altitud'>
                <img className="imgAltitud" src={altitud} alt="" />
                <div className='detalles-jet'>
                    <p>Altitude Airways</p>
                    <p>23k kg</p>
                </div>
                <div className="contenedor-hora">
                    <h2 className='horarioJet'> 6:30AM - 7:55AM</h2>
                    <p className='minJet'>3 hr 25 min</p>

                </div>
                <div>
                    <img className="imgLinea"src={lineaGradual} alt="" />
                    <img className="imgAvion" src={avionN} alt="" /><p className="detalles-stop">1 stop</p> 
                </div>
                <div className='detalles-precio'>
                    <h1 className="precio">206 USD </h1> <p className="pax">/ pax</p>
                    <button className="choose">Choose</button>
                </div>
            </div>
            <div className='contenedor-cloudy'>
                <img className="imgCloudy" src={Cloudy} alt="" />
                <div className='detalles-jet'>
                    <p>Cloudy Airlines</p>
                    <p>23k kg</p>
                </div>
                <div className="contenedor-hora">
                    <h2 className='horarioJet'> 1:19 PM - 2:45 PM</h2>
                    <p className='minJet'>3 hr 26 min</p>

                </div>
                <div>
                    <img className="imgLinea"src={lineaGradual} alt="" />
                    <img className="imgAvion" src={avionN} alt="" /><p className="detalles-stop">1 stop</p> 
                </div>
                <div className='detalles-precio'>
                    <h1 className="precio">148.5 USD </h1> <p className="pax">/ pax</p>
                    <button className="choose">Choose</button>
                </div>
            </div>
            <div className='contenedor-typical'>
                <img className="imgEtiqueta" src={etiqueta} alt="" />
                    <h2 className='textPrices'> Prices are currently typical</h2>
                    <p className='textprice'> Price history </p> <img  className='flecha_price'  src={flechaDespliegue} alt="flecha_price" />
                    
            </div>
            <div className='contenedor-cloudy2'>
                <img className="imgCloudy" src={Cloudy} alt="" />
                <div className='detalles-jet'>
                    <p>Cloudy Airlines</p>
                    <p>23k kg</p>
                </div>
                <div className="contenedor-hora">
                    <h2 className='horarioJet'> 6:13 PM - 7:40 PM</h2>
                    <p className='minJet'>3 hr 27 min</p>

                </div>
                <div>
                    <img className="imgLinea"src={lineaGradual} alt="" />
                    <img className="imgAvion" src={avionN} alt="" /><p className="detalles-stop">1 stop</p> 
                </div>
                <div className='detalles-precio'>
                    <h1 className="precio">380.15 USD </h1> <p className="pax">/ pax</p>
                    <button className="choose">Choose</button>
                </div>
            </div>
            <div className='contenededor-altitud2'>
                <img className="imgAltitud" src={altitud} alt="" />
                <div className='detalles-jet'>
                    <p>Altitude Airways</p>
                    <p>23k kg</p>
                </div>
                <div className="contenedor-hora">
                    <h2 className='horarioJet'> 6:20AM - 7:46AM</h2>
                    <p className='minJet'>3 hr 28 min</p>

                </div>
                <div>
                    <img className="imgLinea"src={lineaGradual} alt="" />
                    <img className="imgAvion" src={avionN} alt="" /><p className="detalles-stop">2 stop</p> 
                </div>
                <div className='detalles-precio'>
                    <h1 className="precio">269.10 USD </h1> <p className="pax">/ pax</p>
                    <button className="choose">Choose</button>
                </div>
            </div>
 

        </section>
    
    </main>
    </>
  )
}

export default Detalles
