import Navbar from "./components/Navbar";
import "./App.css"
import React from "react";
import ItemListContainer from "./components/ItemListContainer";




function App() {
  

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a TecnoBras'/>
      
    </div>
  );
}
  
export default App
