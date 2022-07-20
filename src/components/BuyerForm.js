import React from 'react'
import useCartContext from '../store/CartContext'

const BuyerForm = ({ finishPurchase }) => {
  const { user, setUser } = useCartContext()
  return (
    <div className="buyer-form-container">
      <form className="buyer-form">
        <div className="formfield">
          <label>Full Name:</label>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="formfield">
          <label>Phone:</label>
          <input
            type="phone"
            placeholder="+123456789"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className="formfield">
          <label>Email:</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}

export default BuyerForm
