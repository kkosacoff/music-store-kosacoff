import { React, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false)
  const onAdd = (count) => {
    if (count <= 0) {
      console.error('La cantidad a agregar no puede ser 0')
    } else {
      console.log(`Se agregaron ${count} productos a tu carrito`)
      setIsInCart(true)
    }
  }

  return (
    <section className="product-detail">
      <div className="img-col">
        <img src={product.pictureUrl} alt={product.title} />
      </div>
      <div className="desc-col">
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>

        {isInCart ? (
          <div>
            <h3>Item added to cart</h3>
            <Link className="buy-button" to={'/cart'}>
              View Cart
            </Link>
          </div>
        ) : (
          <ItemCount
            initial={product.initial}
            stock={product.stock}
            onAdd={onAdd}
          />
        )}
      </div>
    </section>
  )
}

export default ItemDetail
