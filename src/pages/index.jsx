import CardMenus from "components/CardMenus";
import logo from '../media2/logo.png';
import Header from "components/Header";
import Footer from "components/Footer";


function Index() {
    return (

        
            <section class="sectionIndex">
                <h1 class="tituloMenu">Menú</h1>
                <ul className="breedCardConteiner">
                    <CardMenus/>
                    <CardMenus/>
                </ul>
            </section>
            
        

    )
}

export default Index;