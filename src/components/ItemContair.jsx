import React, { useState } from 'react'
import Item from './Item'

export const ItemContair = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {



  return (
    <div>

        <div className='Item-contar'>
            <button className='boton-menos' onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className='boton-mas' onClick={handleSumar}>+</button>
        </div>

        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al Carrito</button>
    </div>

  )
  
}

export default ItemContair;