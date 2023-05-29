import "styles/styles.css";
import Index from "pages/Menu";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LayoutMenu from "layouts/LayoutMenu";
import LayoutLogin from "layouts/LayoutLogin";
import Menu from "pages/Menu";
import InicioSesion from "pages/InicioSesion";

function App() {
  return (
    <div className="App">
      <Router>
        <LayoutMenu>
          <Routes>
            <Route path="/" element={<Menu />} exact />
          </Routes>
        </LayoutMenu>
        <LayoutLogin>
          <Routes>
            <Route path="/login" element={<InicioSesion />} exact />
          </Routes>
        </LayoutLogin>
      </Router>
    </div>
  );
}

export default App;
