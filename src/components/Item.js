import React from 'react'
import ItemCount from './ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  stock,
  initial,
}) => {
  return (
    <article className="item">
      <h3>{title}</h3>
      <img src={pictureUrl} alt="" />
      {/* <p>{description}</p> */}
      <h4>$ {price}</h4>
      {/* <ItemCount initial={initial} stock={stock} /> */}
      <Link className="buy-button" to={`/item/${id}`}>
        View
      </Link>
    </article>
  )
}

export default Item
