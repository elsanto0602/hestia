import './styles/styles.css';
import borderCollie from './media2/border_collie.jpg'
import rhodesian from './media2/rhodesian.jpg'
import logo from './media2/logo.png'

function App() {
  return (
    <div className="App">
      <header>
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
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="Border Collie" />
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={rhodesian} alt="Rhodesian" />
              </div>
              <span className="breedTitle">Rhodesian</span>
    
            </li>
            <li>Raza 3</li>
            <li>Raza 4</li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
