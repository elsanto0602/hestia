import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from 'media2/border_collie.jpg';
import rhodesian from 'media2/rhodesian.jpg';
import logo from 'media2/logo.png';
import Header from "components/Header";
import Footer from "components/Footer";


function Index() {
    return (

        
            <section>
                <h1>Razas de Perros</h1>
                <ul className="breedCardConteiner">
                    <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
                    <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
                </ul>
            </section>
            
        

    )
}

export default Index;