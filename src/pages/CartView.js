import './CartView.css'
import Bars from 'react-loading-icons/dist/esm/components/bars'
import { React, useState } from 'react'
import useCartContext from '../store/CartContext'
import CartContainer from '../components/CartContainer'
import BuyerForm from '../components/BuyerForm'
import { sendOrder } from '../services/firestore'
import { Link, useNavigate } from 'react-router-dom'

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { cart, cartAmount, clearCart, user, setOrderId } = useCartContext()

  let navigate = useNavigate()

  const finishPurchase = () => {
    setIsLoading(true)
    sendOrder(cart, cartAmount, user).then(({ id }) => {
      setOrderId(id)
      navigate('/thankyou')
      clearCart()
    })
  }

  return (
    <div className="cart-container">
      <h1>Order Details</h1>

      {isLoading ? (
        <Bars
          className="loading"
          fill="#565656"
          stroke="transparent"
          speed={2}
        />
      ) : cart.length > 0 ? (
        <div className="cart-view-main">
          <div className="form-cart">
            <BuyerForm finishPurchase={finishPurchase} />
            <CartContainer />
          </div>
          <button className="cart-checkout" onClick={() => finishPurchase()}>
            Buy
          </button>
        </div>
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
