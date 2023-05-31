import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemContador from "./ItemContador";
import ItemListContainer from "./ItemListContainer";
import { data } from "../data/data";
import pizza from "../media2/pizza.jpg";
import axios from "axios";

const options = {
  method:"POST",
  url:'',
  headers:{"content-Type":"application/json"},
  data: {},
}
/*
axios.request(options).then(function(response){
  console.log(response.data);
  {<div>Succesful</div>}
}).catch(function(error){
  console.error(error);
  {<div>Not succesful</div>}
});
//1.40.34 react 8
/*
const Productos = [
  {
    id:1,
    nombre: "Pizza",
    label: "lorem ipsum bla bla bla",
    precio: 30000,
    urlImage:pizza,
    cantidad:1
  },
  {
    id:2,
    nombre: "Lasagna",
    label: "lorem ipsum bla bla bla",
    precio: 35000,
    urlImage: pizza,
    cantidad:1
  }
  
]
*/
export const CardMenus = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  contadorProductos,
  setcontadorProductos,
}) => {
  const onAddProduct = (producto) => {
    if (allProducts.find((item) => item.id === producto.id)) {
      const productos = allProducts.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setTotal(total+producto.precio*producto.cantidad)
      setcontadorProductos(contadorProductos+producto.cantidad);
      return setAllProducts([...productos]);
    }
    setTotal(total+producto.precio*producto.cantidad)
    setcontadorProductos(contadorProductos+producto.cantidad);
    setAllProducts([...allProducts, producto]);
  };
 

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const options = {method:'GET',url:'https://api.escuelajs.co/api/v1/products'};
    axios
    .request(options)
    .then(function(response){
      setProductos(response.data)
    })
    .catch(function(error){
      console.error(error);
    });
    setProductos([]);
  }, []);

  return (
    <NuevoProducto
      listaProductos={productos}
      onAddProduct={onAddProduct}
    ></NuevoProducto>
  );
};

const NuevoProducto = ({ listaProductos, onAddProduct }) => {
  useEffect(() => {
    console.log("Este es el listado de productos", listaProductos);
  }, [listaProductos]);
  return (
    <div className="container">
      <div className="row">
        {listaProductos.map((producto) => {
          return (
            <div className="card" key={producto.id}>
              <img className="imgCards" src={producto.images} alt={producto.nombre}></img>
              <div className="card-title">{producto.title}</div>
              <div className="card-description">{producto.description}</div>
              <div className="card-price">$ {producto.price}</div>
              <button onClick={() => onAddProduct(producto)}>
                Añadir al carrito
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardMenus;
