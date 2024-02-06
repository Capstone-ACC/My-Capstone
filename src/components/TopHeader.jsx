import { useNavigate } from 'react-router-dom';
import "./css/TopHeader.css";
import { useContext } from 'react';
import { CartContext } from '../Context/cart';
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


export default function TopHeader() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register")
  }

  const goToCart = () => {
    navigate("/cart");
  }

  return (

    <div className="top-header">
      <div className="summer-sale">
      Summer Sale - Get 50% off items for Registering Today
          -
        <button onClick={goToRegister}>Get Started</button>
    </div>

  
      <div className="cart-icon">
        <i className="fa fa-cart-plus cart-icon" style={{fontSize: '48px', cursor: 'pointer'}} onClick={goToCart}> {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}</i>
        </div>
  
      {/* <Link to="/login" className="login" onClick={()=>handleLogOut()}>Logout</Link>
      <Link to="/login" className="login">Login</Link> */}
    </div>
  )
}

