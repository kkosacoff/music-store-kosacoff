import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic,
  faHouse,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

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

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div className="logo">
        <h1>Music Store</h1>
        <FontAwesomeIcon icon={faMusic} size="2x" />
      </div>
      <div className="links">
        {menuItems.map((item) => {
          const { name, icon, link } = item
          return (
            <li>
              <FontAwesomeIcon icon={icon} />
              <a href={link}>{name}</a>
            </li>
          )
        })}
      </div>
    </navbar>
  )
}

export default Navbar
