import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({ cartAmount }) => {
  return (
    <div className="cart">
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>{cartAmount}</p>
      </button>
    </div>
  )
}

export default CartWidget
