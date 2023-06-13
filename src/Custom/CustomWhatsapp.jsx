import React from 'react'
import { useState } from 'react'
import CustomAddCart from './CustomAddCart'

const CustomWhatsapp = () => {
    const {cart} = CustomAddCart();
    const [descpproduct,setDescproduct] = useState("Hola");
    const sendMessage = ()=>{
        console.log(descpproduct)
    }
   
    
  return{sendMessage}
}

export default CustomWhatsapp