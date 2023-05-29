
import React, { useEffect, useState } from 'react'
import ItemContador from './ItemContador'



const ItemListContainer = () => {
    

    const onAdd = (valor) =>{
        console.log("add");
    }
  return (
    <div>
        <ItemContador initial={1} stock={100} onAdd={onAdd}></ItemContador>
        
    </div>
  )
}

export default ItemListContainer