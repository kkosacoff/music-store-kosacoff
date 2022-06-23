import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic,
  faHouse,
  faUser,
  faPhone,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'

const menuItems = [
  {
    name: 'Home',
    icon: faHouse,
    link: '/',
  },
  {
    name: 'Nosotros',
    icon: faUser,
    link: '/',
  },
  {
    name: 'Contacto',
    icon: faPhone,
    link: '/',
  },
]

const Navbar = ({ cartAmount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Music Store</h1>
        <FontAwesomeIcon icon={faMusic} size="2x" />
      </div>
      <div className="links">
        {menuItems.map((item, index) => {
          const { name, icon, link } = item
          return (
            <li key={index}>
              <FontAwesomeIcon icon={icon} />
              <a href={link}>{name}</a>
            </li>
          )
        })}
      </div>
      <CartWidget cartAmount={0} />
    </nav>
  )
}

export default Navbar
