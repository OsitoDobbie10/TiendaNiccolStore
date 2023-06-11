import React from 'react'
import { useId } from 'react'
import carrito from '../Files/Add-Cart.png'
import add from '../Files/Verificar.png'
import remove from '../Files/Remove-to-cart.png'
import camisa from '../Files/Camisa.png'
import '../Styles/Cartcustom.css'

const CustomCart = () => {
    const checkboxid = useId();
  return (
    <>
    <label htmlFor={checkboxid} className='cart-button'>
        <img src={carrito} alt="Icono" className='iconoCarrito'/>
    </label>
    <input type="checkbox" id={checkboxid} hidden />
    <aside className='cart'>
        <ul>
            <li>
                <img src={camisa} alt="elemento" />
                <div>
                    <strong>Camisa</strong> $400
                </div>
                <footer>
                    <small>
                        Cantidad: 1
                    </small>
                    <div className="boton-agregar">
                    <button type="button" class="btn btn-success">+</button>
                    </div>
                    <div className="boton-quitar">
                    <button type="button" class="btn btn-warning">-</button>
                    </div>
                </footer>
            </li>
        </ul>
        <div className="enviar">
        <button type="button" class="btn btn-primary boton">Enviar pedido</button>
        </div>
      
       
    </aside>
    </>
  )
}

export default CustomCart