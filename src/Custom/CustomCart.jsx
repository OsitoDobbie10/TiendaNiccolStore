import React from 'react'
import { useId} from 'react'
import carrito from '../Files/Add-Cart.png'
import '../Styles/Cartcustom.css'
import CustomAddCart from './CustomAddCart'
import { motion } from 'framer-motion'
import CustomBotom from './CustomBotom.jsx'
function Valores({imagen,descp,precio,quantity,addCart,ClearCard}){
    return <li>
           <img src={imagen} alt="elemento" />
           <div>
        <strong>{descp}</strong> ${precio}
          </div>
        <footer>
        <small>
            Cantidad: {quantity}
        </small>
        <div className="boton-agregar">
        <button type="button" class="btn btn-success" onClick={addCart}>+</button>
        </div>
        <div className="boton-quitar">
        <button type="button" class="btn btn-warning" onClick={ClearCard}>-</button>
        </div>
       </footer>
         </li>
         
}

const CustomCart = () => {
    const checkboxid = useId();
    const {cart,ClearCard,addCart} = CustomAddCart();
    const {cleanBotom} = CustomBotom();

  return (
    <>
    <label htmlFor={checkboxid} className='cart-button'>
        <img src={carrito} alt="Icono" className='iconoCarrito'/>
    </label>
    <input type="checkbox" id={checkboxid} hidden />
    <motion.aside className='cart'
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}>
        <ul>
            {
                cart.map((carrito=>{
                    return <Valores 
                            key={carrito.id}
                            addCart={()=>addCart(carrito)}
                            ClearCard={()=>ClearCard(carrito)}
                            {...carrito}/>
                }))

                
            }
        </ul>
      {
        cart.length > 0 ? <div className="enviar">
                          <button type="button" class="btn btn-primary boton">Enviar pedido</button>
                          </div>:
        <div></div>
      } 
    </motion.aside>
    </>
  )
}

export default CustomCart