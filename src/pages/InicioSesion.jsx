import React from 'react'

const InicioSesion = () => {
  return (
    <div class="divLogin">
            <h2>Inicia sesión</h2>
            <form class="form">
                <div class="inputsDiv">
                    <input class="input" type="email" placeholder="" required />
                    <input class="input" type="password" placeholder="" required />
                </div>
                <div>
                    <button type="submit">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
    </div>
  )
}

export default InicioSesion