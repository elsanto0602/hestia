import CardMenus from "components/CardMenus";
import borderCollie from 'media2/border_collie.jpg';
import rhodesian from 'media2/rhodesian.jpg';
import logo from '../media2/logo.png';
import Header from "components/Header";
import Footer from "components/Footer";


function Index() {
    return (

        
            <section class="sectionIndex">
                <h1 class="tituloMenu">Menú</h1>
                <ul className="breedCardConteiner">
                    <CardMenus nombreRaza="BorderCollie" imagen={borderCollie} />
                    <CardMenus nombreRaza="Rhodesian" imagen={rhodesian} />
                </ul>
            </section>
            
        

    )
}

export default Index;