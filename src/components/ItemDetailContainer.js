import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import data from '../data/data'

const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productFound = data.filter((item) => item.id === productId)
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
  }, [itemId])
  return (
    <div className="detail-container">
      {isLoading ? <h1>Loading</h1> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
