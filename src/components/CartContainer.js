import { React } from 'react'
import CartItem from './CartItem'
import useCartContext from '../store/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartContainer = () => {
  const { cart, clearCart, cartAmount } = useCartContext()
  return (
    <div className="cart-container-form">
      <h2>Your Cart</h2>
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
          return <CartItem key={item.id} item={item} />
        })}
      </div>
      <div className="totals">
        <h2>Total: ${cartAmount.toLocaleString('en-US')}</h2>
      </div>
    </div>
  )
}

export default CartContainer
