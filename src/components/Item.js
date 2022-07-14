import React from 'react'
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
      <h4>$ {price}</h4>
      <Link className="buy-button" to={`/item/${id}`}>
        View
      </Link>
    </article>
  )
}

export default Item
