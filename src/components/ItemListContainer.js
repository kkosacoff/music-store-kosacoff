import { React, useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error))
    }, 2000)
  }, [])
  return (
    <section className="container">
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer
