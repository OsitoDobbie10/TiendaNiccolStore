import React from 'react';
import Navbar from './navbar';
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react';
import Sppiner from './Sppiner';
import Portada from '../ComponentesCamisas/Portada';
import imagen from "../Files/Camisa.png";
import dato from '../DB/Camisas';
import "../Styles/Camisas.css";
import Formularios from '../ComponentesCamisas/Formularios';
import Products from '../ComponentesCamisas/Products';
import FormMobile from "../ComponentesCamisas/FormMobile";
import Customfilters from "../Custom/Customfilters";
import Footer from "../ComponentsHome/Footer";
const Camisas = () => {
  const [time,setTime] =  useState(true);
  const mobile = window.innerWidth <= 768 ? true: false
  setTimeout(()=>{
    setTime(false);
  },2000)
  if (time) return <Sppiner/>
  const {functionfilter} = Customfilters();
  const producto = functionfilter(dato);
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Portada imagen={imagen} tipo="Camisas"/>
      <div className="grilla">
      {
        mobile ? 
       <FormMobile/>:
       <Formularios/>}
       <Products producto = {producto}/>
       <Footer/>
      
      </div>
      

    </div>
  )
}

export default Camisas