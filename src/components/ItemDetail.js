import { React, useState } from 'react'
import ItemCount from './ItemCount'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { toast } from 'react-toastify'

const ItemDetail = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useCartContext()

  const onAdd = (count) => {
    if (count <= 0) {
      toast.error('Quantity to add cannot be 0', {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } else if (count === 1) {
      addToCart(product, count)
      setIsInCart(true)
      toast.success(
        `${count} unit of ${product.title} was added to your cart`,
        {
          position: 'top-center',
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      )
    } else {
      addToCart(product, count)
      setIsInCart(true)
      toast.success(
        `${count} units of ${product.title} were added to the cart`,
        {
          position: 'top-center',
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      )
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
