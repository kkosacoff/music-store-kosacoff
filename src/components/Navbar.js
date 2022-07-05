import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faGuitar, faDrum } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

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
      <CartWidget cartAmount={0} />
    </nav>
  )
}

export default Navbar
