import CardMenus from "components/CardMenus";
import logo from '../media2/logo.png';
import Header from "components/Header";
import Footer from "components/Footer";
import Carrito from "components/Carrito";

function Menu() {
    return (

        
            <section className="sectionIndex">
                <h1 className="tituloMenu">Menú</h1>
                <ul className="breedCardConteiner">
                    <CardMenus/>                                    
                </ul>
                <Carrito/>
            </section>
            
        

    )
}

export default Menu;