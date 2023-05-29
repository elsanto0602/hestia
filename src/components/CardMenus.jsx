import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemContador from "./ItemContador";
import ItemListContainer from "./ItemListContainer";
import { data } from "../data/data";
import pizza from "../media2/pizza.jpg";
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
    setProductos(data);
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
              <img className="imgCards" src={producto.urlImage} alt={producto.nombre}></img>
              <div className="card-title">{producto.nombre}</div>
              <div className="card-description">{producto.label}</div>
              <div className="card-price">$ {producto.precio}</div>
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
