import { useState } from 'react';

const CustomBotom = () => {
    const [boton,setBoton] = useState(true);
    const cleanBotom = ()=>{
        setBoton(false);
    }
  return {boton,cleanBotom}
}

export default CustomBotom