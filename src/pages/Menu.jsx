import CardMenus from "components/CardMenus";
import logo from '../media2/logo.png';
import Header from "components/Header";
import Footer from "components/Footer";
import Carrito from "components/Carrito";

function Menu({
    allProducts,setAllProducts,total,setTotal,contadorProductos,setcontadorProductos
}) {
    return (

        
            <section className="sectionIndex">
                <title>Hestia - menú</title>
                <h1 className="tituloMenu">Menú</h1>
                <ul className="breedCardConteiner">
                    <CardMenus allProducts={allProducts}
            setAllProducts={setAllProducts} total={total}
            setTotal={setTotal} contadorProductos={contadorProductos}
            setcontadorProductos={setcontadorProductos}/>                                    
                </ul>
                <Carrito/>
            </section>
            
        

    )
}

export default Menu;