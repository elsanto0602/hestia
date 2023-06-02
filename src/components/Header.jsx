import logo from "../media2/logo.png";
import cartLogo from "../media2/cart.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  contadorProductos,
  setcontadorProductos,
}) => {
  const [active, setActive] = useState(false);
 
  const onCreateOrder = () =>{
    
    const options = {
      method: "POST",
      url: "https://api.escuelajs.co/api/v1/products/",
      headers: { "content-Type": "application/json" },
      data: {title: allProducts},
    };
    axios
    .request(options)
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.error(error)
    })
  } 
  
  const onDeleteProduct = (producto) => {
    const results = allProducts.filter((item) => item.id !== producto.id);
    setTotal(total - producto.price * producto.cantidad);
    setcontadorProductos(contadorProductos - producto.cantidad);
    setAllProducts(results);
  };

  const onClearCart = () => {
    setAllProducts([]);
    setTotal(0);
    setcontadorProductos(0);
  };
  return (
    <header>
      <nav className="navbar">
        <ul className="ulNavbar">
          <li>
            <div className="logoDiv">
              <Link to="/">
                <img className="logoImg" src={logo} alt="logoImg"></img>
              </Link>
            </div>
          </li>
          <li>
            <button>PIDE EN LÍNEA</button>
          </li>
          <li>
            <button>MENÚ</button>
          </li>
          <li>
            <button
              onClick={() => {
                <Link to="/login"></Link>;
              }}
            >
              INICIAR SESIÓN
            </button>
          </li>
          <li>
            <button>CONTÁCTANOS</button>
          </li>
          <li>
            <div className="container-icon">
              <div
                className="container-cart-icon"
                onClick={() => setActive(!active)}
              >
                <img className="cartIcon"src={cartLogo} alt="carrito"></img>
                <div className="count-products">
                  <span id="contador-productos">{contadorProductos}</span>
                </div>
              </div>

              <div
                className={`container-cart-products ${
                  active ? "" : "hidden-cart"
                }`}
              >
                {allProducts.length ? (
                  <>
                    <div className="row-product">
                      {allProducts.map((producto) => (
                        <div className="cart-product" key={producto.id}>
                          <div className="info-cart-product">
                            <span className="cantidad-producto-carrito">
                              Cantidad: {producto.cantidad}
                            </span>
                            <p className="titulo-producto-carrito">
                              {producto.title}
                            </p>
                            <span className="precio-producto-carrito">
                              Precio: ${producto.price}
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="icon-close"
                            onClick={() => onDeleteProduct(producto)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <div className="cart-total">
                      <h3>Total:</h3>
                      <span className="total-pagar">${total}</span>
                    </div>
                    <div className="cart-buttons">
                      <button className="btn-clear-all" onClick={onClearCart}>
                        Vaciar Carrito
                      </button>
                      <button className="btn-pay-all" onClick={onCreateOrder} >
                        Generar pedido
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="cart-empty">El carrito está vacío</p>
                )}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
