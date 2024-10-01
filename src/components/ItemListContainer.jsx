import React, { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams(); // Obtén la categoría de los parámetros

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                // Filtra los productos si hay una categoría
                const productosFiltrados = categoria ? res.filter((producto) => producto.categoria === categoria) : res;
                setProductos(productosFiltrados);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, [categoria]); // Dependencia de la categoría

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;

