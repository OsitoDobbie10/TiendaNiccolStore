import React from 'react';
import "../Styles/products.css";
import { motion } from 'framer-motion';
import { useState } from 'react';
import random from "../Files/Add-Cart.png";
import {FiXCircle} from "react-icons/fi";
const CustomProducts = (props) => {
    const inicialvalue = {
      id:1,
      Talla:'6',
      color:'Cafe',
      precio:600,
      descp:'Sandalia marca coach',
      imagen:random
    }
    const [estado1,setEstado1] = useState(inicialvalue)
    const [cerrar,setCerrar] = useState(false)
 
    const close = ()=>{
      setCerrar(false);
    }
    const {productsshoes,titulo} = props;
    const restructurar = (id)=>{
      setCerrar(true);
    }
    return (
        <div className='Productos'>
      <div className="title">
        {titulo}
      </div>
      <ul className='arrayCamisas'>
        {
          productsshoes.map((camisa)=>{
            return <motion.li
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={camisa.id}>
                    <img src={camisa.imagen} alt={camisa.descp} onClick={restructurar}/>
                    <p>{camisa.descp}</p>
                    <p>precio: <span style={{color:"red"}}>{camisa.precio}$</span></p>
                    <button type="button" class="btn btn-success">Agregar carrito</button>
                  </motion.li>
          })
        }
      </ul>
      {
        cerrar?
        <div className="BiggerImage">
        <div className='Cerrar' onClick={close}><FiXCircle/></div>
        <img src={estado1.imagen} alt={estado1.descp} />
        <ul className='Arreglo'>
          <li>{estado1.descp}</li> 
        </ul>
       
      </div>:
      <div></div>
      }
    </div>
    )
 
}

export default CustomProducts