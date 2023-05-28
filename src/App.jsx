import 'styles/styles.css';
import Index from 'pages/Menu';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Layout from 'layouts/Layout';
import Menu from 'pages/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Menu/>} exact />            
            
            

          </Routes>
        </Layout>
      </Router>

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
