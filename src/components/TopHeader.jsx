import React from 'react'
import { Link } from 'react-router-dom'
import { saveCartToLocalStorage } from '../Context/CartUtils'

  //handle logout
  const handleLogOut = () => {
    saveCartToLocalStorage(cartItems)
  }

export default function TopHeader() {
  return (
    <div className="top-header">Summer Sale - Get 50% off for signing up - 
      <Link to="/register" className="shopNow">Shop Now</Link>
      <Link to="/login" className="login" onClick={handleLogOut}>Logout</Link>
      <Link to="/login" className="login">Login</Link>
    </div>
  )
}


