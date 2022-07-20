import { createContext } from 'react'
import { useContext, useState } from 'react'

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [user, setUser] = useState({ name: '', email: '', phone: '' })
  const [orderId, setOrderId] = useState('')
  const [cartAmount, setCartAmount] = useState(0)

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem }
          copyItem.quantity += quantity
          return copyItem
        } else return cartItem
      })
      setCart(newCart)
    } else {
      const newItem = { ...item, quantity }
      setCart([...cart, newItem])
    }
  }

  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const getCartCount = () => {
    let totalQuantity = 0
    cart.forEach((item) => (totalQuantity += item.quantity))
    setCartCount(totalQuantity)
  }
  const getCartAmount = () => {
    let totalAmount = 0
    cart.forEach((item) => (totalAmount += item.quantity * item.price))
    setCartAmount(totalAmount)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        cartCount,
        cartAmount,
        getCartCount,
        getCartAmount,
        user,
        setUser,
        orderId,
        setOrderId,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default useCartContext
