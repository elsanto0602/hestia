import logo from 'media2/logo.png';

const Header = () =>{
    return (
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
