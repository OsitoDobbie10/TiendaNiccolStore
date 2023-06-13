import React from 'react'
import { useId} from 'react'
import carrito from '../Files/Add-Cart.png'
import '../Styles/Cartcustom.css'
import CustomBotom from './CustomBotom.jsx'
import CustomAddCart from './CustomAddCart'
import CustomWhatsapp from './CustomWhatsapp'
import { motion } from 'framer-motion'

function Valores({imagen,descp,precio,quantity}){
    return <li>
           <img src={imagen} alt="elemento" />
           <div>
        <strong>{descp}</strong> ${precio}
          </div>
        <footer>
        <small>
            Cantidad: {quantity}
        </small>
        <div className="enviar">
        <button type="button" class="btn btn-primary boton">Enviar pedido</button>
        </div>
       </footer>
      </li>
         
}

const CustomCart = () => {
    const checkboxid = useId();
    const {cart} = CustomAddCart();
    const {cleanBotom,boton} = CustomBotom();
    const {sendMessage,setNombre} = CustomWhatsapp();
   
  return (
    <>
    <label htmlFor={checkboxid} className='cart-button'>
        <img src={carrito} alt="Icono" className='iconoCarrito' onClick = {()=>cleanBotom}/>
    </label>
    <input type="checkbox" id={checkboxid} hidden />
    <motion.aside className='cart'
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}>
        <ul>
            {
                cart.map((carrito=>{
                    return  <li key={carrito.id}>
                    <img src={carrito.imagen} alt="elemento" />
                    <div>
                 <strong>{carrito.descp}</strong> precio: ${carrito.precio}
                   </div>
                 <footer>
                 <small>
                    Talla: {carrito.Talla}
                 </small>
                 <div className="datos">
                  <span>Escribe tu nombre</span>
                 <input type="text" className='nombre'onChange={(e)=>{setNombre(e.target.value)}}/>
                 </div>
                 <div className="enviar">
                 <button type="button" class="btn btn-primary boton" onClick={()=>sendMessage(carrito)}>Enviar pedido</button>
                 </div>
                </footer>
               </li>
                }))
                
            }
        </ul>
     
    </motion.aside>
    </>
  )
}

export default CustomCart