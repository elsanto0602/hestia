import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useState } from 'react'
const LayoutLogin = ({children}) => {
    
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
                {children}
            </main>
            <Footer/>
        </div>
)}

export default LayoutLogin