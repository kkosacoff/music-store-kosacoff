import React from 'react'
import useCartContext from '../store/CartContext'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const { cart, removeItem, clearCart } = useCartContext()
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <button className="clear-cart" onClick={() => clearCart()}>
        Clear Cart
        <FontAwesomeIcon
          className="trash-icon"
          icon={faTrashCan}
          color="#FFFFF"
          style={{ marginLeft: '10px' }}
        />
      </button>
      {cart.map((item) => {
        return (
          <article className="cart-item" key={item.id}>
            <img src={item.pictureUrl} alt={item.title} />
            <h3 className="cart-title">{item.title}</h3>
            <h3 className="cart-price">${item.price}</h3>
            <h3 className="cart-quantity">{item.quantity}</h3>
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
      })}
    </div>
  )
}

export default Cart
