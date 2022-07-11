import { createContext } from 'react'
import { useContext, useState } from 'react'

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

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
    getCartCount()
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        cartCount,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default useCartContext
