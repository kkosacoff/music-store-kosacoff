import React from 'react'
import ItemCount from './ItemCount'
import './Item.css'

const Item = ({ title, description, price, pictureUrl, stock, initial }) => {
  return (
    <article className="item">
      <h3>{title}</h3>
      <img src={pictureUrl} alt="" />
      <p>{description}</p>
      <p>$ {price}</p>
    </article>
  )
}

export default Item
