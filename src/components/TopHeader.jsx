import React from 'react'
import { Link } from 'react-router-dom'
import { saveCartToLocalStorage } from '../Context/CartUtils'

  //handle logout
  const handleLogOut = () => {
    saveCartToLocalStorage(myCart)
    localStorage.removeItem('username');  

    function forEachKey(callback) {
      for (let i = 0; i < localStorage.length; i++) {
        callback(localStorage.key(i));
      }
    }
    
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
    }
  }

export default function TopHeader() {
  return (
    <div className="top-header">Summer Sale - Get 50% off for signing up - 
      <Link to="/register" className="shopNow">Shop Now</Link>
      <Link to="/login" className="login" onClick={()=>handleLogOut()}>Logout</Link>
      <Link to="/login" className="login">Login</Link>
    </div>
  )
}

