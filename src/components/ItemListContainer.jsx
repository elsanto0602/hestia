
import React, { useEffect, useState } from 'react'
import ItemContador from './ItemContador'
import ItemList from './ItemList'

const productos = [
    {id:1, image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.laespanolaaceites.com%2Fwp-content%2Fuploads%2F2019%2F06%2Fpizza-con-chorizo-jamon-y-queso-1080x671.jpg&tbnid=OHCj3BQ07nlg4M&vet=12ahUKEwi7u5yq0pb_AhUYajABHS4iBIMQMygAegUIARD8AQ..i&imgrefurl=https%3A%2F%2Fwww.laespanolaaceites.com%2Frecetas%2Fpizza-con-chorizo-jamon-y-queso%2F&docid=8eVwSbSXKVAdaM&w=900&h=559&q=pizza&ved=2ahUKEwi7u5yq0pb_AhUYajABHS4iBIMQMygAegUIARD8AQ"}

]

const ItemListContainer = () => {
    const[data,setData] = useState([]);

    useEffect(()=>{
        const getData = new Promise(resolve =>{
            resolve(productos);
        });
        getData.then(res => setData(res))
    },[])

    const onAdd = (valor) =>{
        console.log("Compraste ${valor} unidades");
    }
  return (
    <div>
        <ItemContador initial={1} stock={100} onAdd={onAdd}></ItemContador>
        <ItemList data={data}></ItemList>
    </div>
  )
}

export default ItemListContainer