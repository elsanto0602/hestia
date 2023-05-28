import logo from '../media2/logo.png';
import { Link } from 'react-router-dom';

const Header = ({}) =>{
    return (
        <header>

            
<nav className="navbar">
            <ul className="ulNavbar">
                <li>
                    <div className="logoDiv">
                        <Link to="/"><img className="logoImg" src={logo} alt="logoImg"></img></Link>
                    </div>
                </li>
                <li>
                    <button>PIDE EN LÍNEA</button>
                </li>
                <li>
                    <button>MENÚ</button>
                </li>
                <li>
                    <button onclick="window.location.href='../pages/login.html'">INICIAR SESIÓN</button>
                </li>
                <li>
                    <button>CONTÁCTANOS</button>
                </li>
            </ul>
        </nav>

        </header>
    );
}

export default Header;

// const variableNumerica = 3;
// const variableDeTexto = "esto es un texto";
// const variableArray = [1, 2, 3, 4, 5, 5]
// const variableObjeto = {
//     llave1: "valor1",
//     llave2: "valor2",
//     llave3: "valor3",

// }

// const listaObjetos = [
//     {
//         llave1: "valor1",
//         llave2: "valor2",
//         llave3: "valor3",

//     },
//     {
//         llave1: "valor1",
//         llave2: "valor2",
//         llave3: "valor3",

//     },
//     {
//         llave1: "valor1",
//         llave2: "valor2",
//         llave3: "valor3",

//     }
// ]

// const variableFuncion = function hola() {
//     return "hola";
// }

// //simplificacion con arrowfunctions

// const nombreFuncion = (in1,in2,in3) =>{
//     return "retorno de la funcion";
// };

// //es lo mismo que:

// function nombreFuncion(in1,in2,in3){
//     return "retorno de la funcion";
// }
