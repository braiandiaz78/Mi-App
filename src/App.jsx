import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Contacto } from "./components/Contacto";
import Item from "./components/Item";
import { CartContext } from "./context/CartContext";
import Carrito from "./components/Carrito";
import { Checkout } from "./components/Checkout";


function App() {

  const [carrito, setCarrito]= useState ([]);
  const agregarAlCarrito = (item, cantidad) => {
    const prodAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find ((producto) => producto.id === prodAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    }else {
      nuevoCarrito.push (prodAgregado);
    }
    setCarrito (nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce ((acc, producto) => acc + producto.cantidad, 0);

  }

  const precioTotal = () => {
    return carrito.reduce ((acc, prod ) => acc + prod.precio + prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito ([]);
  }

  
  return (
    <div>
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito} }>
         <BrowserRouter>
            <Navbar />
            <Routes>
          
                <Route path="/" element={<ItemListContainer />} />


                <Route path="/items" element={<Item/>} />



                <Route path="/item/:id" element={<ItemDetailContainer/>} />


                <Route path="/productos/:categoria" element={<ItemListContainer />} />

          
                <Route path="/Contacto" element={<Contacto />} />

                <Route path="/carrito" element={<Carrito />} />

                <Route path="/checkout" element={<Checkout />} />

              </Routes>
          </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;



