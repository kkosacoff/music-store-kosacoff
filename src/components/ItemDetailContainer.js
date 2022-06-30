import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => setProduct(data[0]))
        .then(() => {
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    }, 2000)
  }, [])
  return (
    <div className="detail-container">
      {isLoading ? <h1>Loading</h1> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
