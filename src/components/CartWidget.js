import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({ cartAmount, cartCount }) => {
  return (
    <div className="cart">
      <Link to={'/cart'}>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>${cartAmount}</p>
          <p>|</p>
          <p>{cartCount}</p>
        </button>
      </Link>
    </div>
  )
}

export default CartWidget
