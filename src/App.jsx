import Navbar from "./components/Navbar";
import "./App.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  

  return (
    <div>
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}
  
export default App
