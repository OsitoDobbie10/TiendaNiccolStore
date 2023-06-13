import CustomAddCart from './CustomAddCart'

const CustomWhatsapp = () => {
    const {cart} = CustomAddCart();
    const sendMessage = (carrito)=>{
        const objeto = cart.find((value)=> value.id === carrito.id)
        console.log(objeto);
        const Descripcionproducto = objeto.descp;
        console.log(Descripcionproducto);
        const Tallaproducto = objeto.Talla;
        const Colorproducto = objeto.color;
        const IDproducto = objeto.id;
        const telefono = 96613735;
        const url = `https://api.whatsapp.com/send?phone=504${telefono}&text=
        *Asunto producto en venta*%0A
        *NC Store*%0A%0A
        *Nombre de la persona que solicito servicio*%0A
        ${'Carlos'}%0A
        *Producto que se llevara*%0A
        ${Descripcionproducto}%0A
        *ID del producto de Zapato*%0A
        ${IDproducto}%0A
        *Talla del producto que se compra*%0A
        ${Tallaproducto}%0A
        *Color del producto escogido*%0A
        ${Colorproducto}`;
        window.open(url);

    }
   
    
  return{sendMessage}
}

export default CustomWhatsapp