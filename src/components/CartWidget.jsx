import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'


 function CartWidget() {

  const {cantidadEnCarrito}= useContext(CartContext);

  return (
  
    <div> 
      <Link className='menu-link'  to="/Carrito">
       <button className="cart"><img src="../cart3.svg" alt=""/>
        <span className="numerito">   {cantidadEnCarrito ()}</span>
       </button>
      </Link>

    </div>
   
  )
}

export default CartWidget;