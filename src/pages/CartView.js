import React from 'react'
import useCartContext from '../store/CartContext'
import './CartView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CartView = () => {
  const { cart, removeItem, clearCart, cartAmount } = useCartContext()
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length > 0 ? (
        <>
          <button className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
            <FontAwesomeIcon
              className="trash-icon"
              icon={faTrashCan}
              color="#FFFFF"
              style={{ marginLeft: '10px' }}
            />
          </button>
          <div className="cart-items">
            {cart.map((item) => {
              return (
                <article className="cart-item" key={item.id}>
                  <img src={item.pictureUrl} alt={item.title} />
                  <div className="item-details">
                    <h2 className="cart-title">{item.title}</h2>
                    <p className="cart-price">Price: ${item.price}</p>
                    <p className="cart-quantity">Quantity: {item.quantity}</p>
                  </div>
                  <div className="total-item">
                    <h1>
                      ${(item.quantity * item.price).toLocaleString('en-US')}
                    </h1>
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
            })}
          </div>
          <div className="totals">
            <h1>Total: ${cartAmount.toLocaleString('en-US')}</h1>
          </div>
        </>
      ) : (
        <div className="go-back">
          <h2>Cart is empty. Add items to the cart to continue</h2>
          <Link to={'/'}>
            <button>See products</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartView
