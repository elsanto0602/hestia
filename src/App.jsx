import 'styles/styles.css';
import borderCollie from 'media2/border_collie.jpg'
import rhodesian from 'media2/rhodesian.jpg'
import logo from 'media2/logo.png'
import CardRazasPerros from 'components/CardRazasPerros';

function App() {
  return (
    <div className="App">
      <header>

        <div>Hola mundo esto es un div</div>
        <ul className="navbar">
          <li>
            <img src={logo} alt="imagen" className="logo" />
          </li>
          <li>
            <button className="button mainButton">Nuevo post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" />
              <i className="fa-solid fa-magnifying-glass button iconoBusqueda"></i>
            </div>

          </li>
          <li><button className="button secondaryButton">Login</button></li>
          <li><button className="button mainButton">Registro</button></li>

        </ul>

      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardConteiner">
            <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie}/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian}/>            
          </ul>
        </section>
        <section></section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

/*
con props
function CardRazasPerros(props) {
  return (
    <li className="breedCard backgroundRojo">
      <div className="contenedorImagen">
        <img src={props.imagen} alt={props.nombreRaza} />
      </div>
      <span className="breedTitle">{props.nombreRaza}</span>
    </li>
  );
}
*/


export default App;
