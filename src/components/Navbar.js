import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faGuitar, faDrum } from '@fortawesome/free-solid-svg-icons'

import CartWidget from './CartWidget'
import useCartContext from '../store/CartContext'

const menuItems = [
  {
    name: 'Guitar',
    icon: faGuitar,
    link: '/category/Guitar',
  },
  {
    name: 'Drums',
    icon: faDrum,
    link: '/category/Drums',
  },
  {
    name: 'Bass',
    icon: faGuitar,
    link: '/category/Bass',
  },
]

const Navbar = () => {
  const { cart, getCartCount, cartCount, getCartAmount, cartAmount } =
    useCartContext()

  useEffect(() => {
    getCartCount()
    getCartAmount()
  }, [cart])

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>
          <h1>Music Store</h1>
        </Link>
        <FontAwesomeIcon icon={faMusic} size="2x" />
      </div>
      <div className="links">
        {menuItems.map((item, index) => {
          const { name, icon, link } = item
          return (
            <li key={index}>
              <FontAwesomeIcon icon={icon} />
              <Link to={link}>{name}</Link>
            </li>
          )
        })}
      </div>
      <CartWidget cartCount={cartCount} cartAmount={cartAmount} />
    </nav>
  )
}

export default Navbar
