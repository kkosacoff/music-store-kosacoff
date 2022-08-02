import './ThankYou.css'
import React from 'react'
import useCartContext from '../store/CartContext'

const ThankYou = () => {
  const { orderId, user } = useCartContext()

  return (
    <div className="order-container">
      <div className="order">
        <h2>Order {orderId} created successfuly</h2>
        <p>
          Thank you for your purchase {user.name}. Your order {orderId} was
          created successfuly. You should've received an email at {user.email}
        </p>
      </div>
    </div>
  )
}

export default ThankYou
