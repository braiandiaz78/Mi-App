import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Contacto } from "./components/Contacto";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />


          <Route path="/items" element={<Item/>} />



          <Route path="/item/.id" element={<ItemDetailContainer/>} />


          <Route path="/productos/:categoria" element={<ItemListContainer />} />

          
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



