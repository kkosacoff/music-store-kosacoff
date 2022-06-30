import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  return (
    <section className="product-detail">
      <div className="img-col">
        <img src={product.pictureUrl} alt={product.title} />
      </div>
      <div className="desc-col">
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <ItemCount initial={product.initial} stock={product.stock} />
      </div>
    </section>
  )
}

export default ItemDetail
