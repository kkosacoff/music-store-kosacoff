import { React, useEffect, useState } from 'react'
import { Bars } from 'react-loading-icons'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/firestore'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProducts(categoryId).then((response) => {
      setProducts(response)
      setIsLoading(false)
    })
  }, [categoryId])
  return (
    <section className="container">
      {isLoading ? (
        <Bars
          className="loading"
          fill="#565656"
          stroke="transparent"
          speed={2}
        />
      ) : (
        <ItemList products={products} />
      )}
    </section>
  )
}

export default ItemListContainer
