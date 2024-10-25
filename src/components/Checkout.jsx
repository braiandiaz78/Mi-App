import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/data';


export const Checkout = () => {

  const [pedidoId, setPedidoId] = useState("");
  
  const { carrito, precioTotal, vaciarCarrito }= useContext (CartContext);

  const { register, handleSubmit }= useForm();
  
  const comprar = (data) => {
        const pedidos = {
          cliente:data,
          productos:carrito,
          total:precioTotal()
        }
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedidos)
          .then((doc) => {

            setPedidoId(doc.id);
            vaciarCarrito();

          })

    }

    if (pedidoId) {
        return (
            <div className='conatiner'>
                <h1 className='main-title'>Compra finalizda. Muchas Gracias</h1>
                <p>Tu codigo de pedido es {pedidoId}</p>

            </div>
        )
            
            
        
    }
  
  return (
    <div className='container'>
      <h1 className='main-title'>Finalizar compra</h1>

      <form className='formulario' onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder='Ingrese su nombre' {...register ("nombre")}/>
        <input type="text" placeholder='Ingrese su email' {...register ("email")}/>
        <input type="text" placeholder='Ingrese su telefono' {...register ("telefono")}/>


        <button className='enviar' type='submit'>Comprar</button>

      </form>

    </div>
  )
}

export default Checkout;