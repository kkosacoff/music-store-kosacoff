import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="container">Bienvenido a Music Store {greeting}</section>
  )
}

export default ItemListContainer
