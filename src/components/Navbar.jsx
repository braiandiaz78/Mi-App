import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
    return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>TECNOB</h1></Link>
        <ul className="menu">
            
            <li><Link className="menu-link" to="/productos/Notebooks">Notebooks</Link></li>
            <li><Link className="menu-link" to="/productos/Monitores">Monitores</Link></li>
            <li><Link className="menu-link" to="/Contacto">Contacto</Link></li>
            <CartWidget/>
        </ul>

        
        
    </nav>

        


  )
}

export default Navbar;