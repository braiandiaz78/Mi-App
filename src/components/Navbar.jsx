import React from 'react'
import CartWidget from './CartWidget'





 export const Navbar = () => {
  
    return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>TecnoBras</h1></a>
        <ul className="menu">
            
            <li><a className="menu-link" href="#">Notebooks</a></li>
            <li><a className="menu-link" href="#">Mouse y Teclados</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
            <CartWidget/>
        </ul>
        
    </nav>
  )
}

export default Navbar