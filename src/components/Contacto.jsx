import React from 'react'
import {useForm} from "react-hook-form";

export const Contacto = () => {

  const { register, handleSubmit }= useForm();
  
  const enviar = (data) => {
    console.log (data);

  }

return (
    
    
    <div className='container'>
      <h1 className='main-title'>Contacto</h1>

      <form className='formulario' onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingrese su nombre' {...register ("nombre")}/>
        <input type="text" placeholder='Ingrese su email' {...register ("email")}/>
        <input type="text" placeholder='Ingrese su telefono' {...register ("telefono")}/>


        <button className='enviar' type='submit'>Enviar</button>




      </form>




    </div>
  )
}

export default Contacto;