import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import data from '../data/data'

const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productFound = data.filter((item) => item.id === productId)
      // console.log(productFound)
      resolve(productFound[0])
    }, 700)
  })
}

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { itemId } = useParams()
  // console.log(itemId)

  useEffect(() => {
    setIsLoading(true)
    getProduct(itemId)
      .then((response) => setProduct(response))
      .then(() => {
        setIsLoading(false)
      })

    // setTimeout(() => {
    //   fetch('data.json')
    //     .then((response) => response.json())
    //     .then((data) => setProduct(data[0]))
    //     .then(() => {
    //       setIsLoading(false)
    //     })
    //     .catch((error) => console.log(error))
    // }, 2000)
  }, [itemId])
  return (
    <div className="detail-container">
      {isLoading ? <h1>Loading</h1> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
