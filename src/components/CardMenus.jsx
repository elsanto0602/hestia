import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemContador from "./ItemContador";
import ItemListContainer from "./ItemListContainer";
import pizza from "../media2/pizza.jpg"

const Productos = [
  {
    nombre: "Pizza",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
  {
    nombre: "Lasagna",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
  {
    nombre: "Pizza",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
  {
    nombre: "Lasagna",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
  {
    nombre: "Pizza",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
  {
    nombre: "Lasagna",
    label: "lorem ipsum bla bla bla",
    precio: 30000
  },
]

export const CardMenus = () => {
  
  const [productos,setProductos] = useState([]);

  useEffect(()=>{
    setProductos(Productos);
  },[])

 

  return (
    <NuevoProducto listaProductos={productos}></NuevoProducto>
  );
}

const NuevoProducto = ({listaProductos}) =>{
  useEffect(()=>{
    console.log("Este es el listado de productos",listaProductos)
  },[listaProductos])
  return(
    <div class="container">
    <div class="row">
      
        {listaProductos.map((producto)=>{
          return(
            <div className="card">
              <img src={pizza} alt="Platillo 1"></img>
              <div class="card-title">{producto.nombre}</div>
              <div class="card-description">{producto.label}</div>
              <div class="card-price">$ {producto.precio}</div>
              <ItemListContainer ></ItemListContainer>
            </div>
          )
        })}
        
      
    </div>
  </div>
  )
}

export default CardMenus;
