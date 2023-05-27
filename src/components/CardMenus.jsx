import { Link } from "react-router-dom";

function CardMenus({}) {
  return (
    <div class="container">
        {/*
      <li className="breedCard backgroundRojo">
        <Link to="/rhodesian">
          <div className="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
        </Link>
        <span className="breedTitle">{nombreRaza}</span>
  </li>*/}
    
      <div class="row">
        <div class="card">
          <img src="ruta_de_imagen_1.jpg" alt="Platillo 1"></img>
          <div class="card-title">Platillo 1</div>
          <div class="card-description">Descripción del platillo 1.</div>
        </div>
      </div>
    </div>
  );
}

export default CardMenus;
