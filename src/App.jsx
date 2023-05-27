import 'styles/styles.css';
import Index from 'pages/index';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Layout from 'layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Index />} exact />
            

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
