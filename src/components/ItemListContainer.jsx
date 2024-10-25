import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams(); // Obtén la categoría de los parámetros

  useEffect(() => {
    const productosRef = collection(db, "productos");

    // Verificar si categoria está definida antes de realizar la consulta
    let q;
    if (categoria) {
      q = query(productosRef, where("categoria", "==", categoria));
    } else {
      q = productosRef; // Si no hay categoría, obten todos los productos
    }

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error("Error obteniendo los productos: ", error);
      });
  }, [categoria]); // Dependencia de la categoría

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
