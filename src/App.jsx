import 'styles/styles.css';
import Index from 'pages/index';
import RhodesianInfoPage from 'pages/rhodesian';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>             
          <Route path="/rhodesian" element={<RhodesianInfoPage/>}/>            
        </Routes>
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
