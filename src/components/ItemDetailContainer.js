import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Bars from 'react-loading-icons/dist/esm/components/bars'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { getProduct } from '../services/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProduct(itemId).then((response) => {
      setProduct(response)
      setIsLoading(false)
    })
  }, [itemId])
  return (
    <div className="detail-container">
      {isLoading ? (
        <Bars
          className="loading"
          fill="#565656"
          stroke="transparent"
          speed={2}
        />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  )
}

export default ItemDetailContainer
