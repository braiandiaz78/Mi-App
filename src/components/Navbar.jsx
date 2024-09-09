import React from 'react'




 export const Navbar = () => {
  
    return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>TecnoBras</h1></a>
        <ul className="menu">
            
            <li><a className="menu-link" href="#">Notebooks</a></li>
            <li><a className="menu-link" href="#">Mause y Teclados</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
            
        </ul>

        <a href='#' className="carrito-icon">
          <i className="bi bi-cart4"></i>
        </a>
    </nav>
  )
}

export default Navbar