import React from "react";
import { useState, useEffect } from "react";

export const ItemContador = ({initial, stock, onAdd}) => {
  const [contador, setContador] = useState((initial));

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  useEffect(()=>{
    setContador((initial))
  },[initial])

  return (
    <div class="card-counter">
      <button disabled={contador <= 1} onClick={decrementarContador}>
        -
      </button>
      <span>{contador}</span>
      <button disabled={contador >= stock} onClick={incrementarContador}>
        +
      </button>
      <div>
        <button disabled={stock<=0} onClick={()=>onAdd(contador)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemContador;
