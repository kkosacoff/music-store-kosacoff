import { React, useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const addItem = () => {
    if (count < stock || count === 0) {
      setCount(count + 1)
    }
  }

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count-container">
      <div className="button-container">
        <button
          onClick={() => {
            removeItem()
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            addItem()
          }}
        >
          +
        </button>
      </div>
      <div className="add-to-cart-container">
        <button
          onClick={() => {
            onAdd(count)
          }}
          className="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCount
