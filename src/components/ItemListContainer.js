import { React, useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import data from '../data/data'

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

  // console.log(categoryId)

  useEffect(() => {
    setIsLoading(true)
    getProducts(categoryId)
      .then((response) => setProducts(response))
      .then(() => {
        setIsLoading(false)
      })
    // setTimeout(() => {
    //   fetch('data.json', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data))
    //     .then(() => {
    //       setIsLoading(false)
    //     })
    //     .catch((error) => console.log(error))
    // }, 2000)
  }, [categoryId])
  return (
    <section className="container">
      {isLoading ? <h1>Loading...</h1> : <ItemList products={products} />}
    </section>
  )
}

export default ItemListContainer
