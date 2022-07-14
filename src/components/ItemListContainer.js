import { React, useEffect, useState } from 'react'
import { Grid } from 'react-loading-icons'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import data from '../data/data'

import { getFireStore, doc, getDoc } from 'firebase/firestore'

const getProducts = (catId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (catId) {
        resolve(
          data.filter((item) => {
            return item.category === catId
          })
        )
      } else {
        resolve(data)
      }
    }, 700)
  })
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProducts(categoryId)
      .then((response) => setProducts(response))
      .then(() => {
        setIsLoading(false)
      })
  }, [categoryId])
  return (
    <section className="container">
      {isLoading ? (
        <Grid
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
