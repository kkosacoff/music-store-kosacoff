import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className="item-container">
      {products.map((product) => {
        const { id } = product
        return <Item key={id} {...product} />
      })}
    </div>
  )
}

export default ItemList
