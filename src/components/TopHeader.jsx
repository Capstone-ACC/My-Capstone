import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./css/TopHeader.css";
// import { Link } from 'react-router-dom'
// import { saveCartToLocalStorage } from '../Context/CartUtils'

  // //handle logout
  // const handleLogOut = (myCart) => {
  //   saveCartToLocalStorage(myCart)
  //   localStorage.removeItem("username");   
  // }

// //handle logout
// const handleLogOut = (myCart) => {
//   saveCartToLocalStorage(myCart);
//   localStorage.removeItem("username");
//   localStorage.removeItem("cartUserId");
// };


export default function TopHeader({size}) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register")
  }
  return (
    <div className="top-header">
      <div className="summer-sale">
      Summer Sale - Get 50% off items for Registering Today
          -
        <button onClick={goToRegister}>Get Started</button>
    </div>

      <i className="fa fa-cart-plus cart-icon" style={{fontSize: '36px'}}></i>
      <span>{size}</span>
      {/* <Link to="/login" className="login" onClick={()=>handleLogOut()}>Logout</Link>
      <Link to="/login" className="login">Login</Link> */}
    </div>
  )
}