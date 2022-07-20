import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
  const { removeItem } = useCartContext()
  return (
    <article className="cart-item" key={item.id}>
      <img src={item.pictureUrl} alt={item.title} />
      <div className="item-details">
        <Link to={`/item/${item.id}`}>
          <h4 className="cart-title">
            {item.title} x {item.quantity}
          </h4>
        </Link>
        {/* <p className="cart-price">Price: ${item.price}</p> */}
        {/* <p className="cart-quantity">Quantity: {item.quantity}</p> */}
      </div>
      <div className="total-item">
        <h4>${(item.quantity * item.price).toLocaleString('en-US')}</h4>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        color="#990505"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          removeItem(item.id)
        }}
      />
    </article>
  )
}

export default CartItem
