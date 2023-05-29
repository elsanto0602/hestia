import logo from "../media2/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ allProducts, setAllProducts, total,setTotal , contadorProductos,setcontadorProductos}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (producto) =>{
    const results = allProducts.filter(item => item.id !== producto.id);
    setTotal(total-producto.precio*producto.cantidad)
    setcontadorProductos(contadorProductos-producto.cantidad);
    setAllProducts(results)
  };

  const onClearCart = () =>{
    setAllProducts([])
    setTotal(0)
    setcontadorProductos(0)
  }
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
            <button onClick={()=>{<Link to="/login"></Link>}}>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon-cart"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <div className="count-products">
                  <span id="contador-productos">
                    {contadorProductos}
                  </span>
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
                        {allProducts.map(producto =>(
                            <div className="cart-product" key={producto.id}>
                            <div className="info-cart-product">
                              <span className="cantidad-producto-carrito">
                                Cantidad: {producto.cantidad}
                              </span>
                              <p className="titulo-producto-carrito">
                                {producto.nombre}
                              </p>
                              <span className="precio-producto-carrito">
                                ${producto.precio}
                              </span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="icon-close"
                              onClick={()=>onDeleteProduct(producto)}
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

                    <button className="btn-clear-all" onClick={onClearCart}>
                            Vaciar Carrito
                    </button>
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

