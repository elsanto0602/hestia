import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'pages/Menu';
import { useState } from 'react';


const Layout = () => {
    const [allProducts, setAllProducts] = useState([]);
  const [total,setTotal] = useState(0);  
  const [contadorProductos,setcontadorProductos] = useState(0);
    return (
        <div className="mainContainer">
            <Header allProducts={allProducts}
            setAllProducts={setAllProducts} total={total}
            setTotal={setTotal} contadorProductos={contadorProductos}
            setcontadorProductos={setcontadorProductos}/>
            <main>
                <Menu allProducts={allProducts}
            setAllProducts={setAllProducts} total={total}
            setTotal={setTotal} contadorProductos={contadorProductos}
            setcontadorProductos={setcontadorProductos}/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout