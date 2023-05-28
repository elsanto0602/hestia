import React from 'react'
import Item from './Item'

const ItemList = ({data=[]}) => {
  return (
    data.map(film=><Item key={data.id} info={data}></Item>)
  )
}

export default ItemList