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
import InicioSesion from 'pages/InicioSesion';

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Menu/>} exact />            
            
            <Route path="/login" element={<InicioSesion/>} exact />            
            
            

          </Routes>
        </Layout>
      </Router>

    </div>
  );
}



export default App;
