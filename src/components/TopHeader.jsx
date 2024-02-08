import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/cart';
import "./css/TopHeader.css";

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

  // const goToRegister = () => {
  //   navigate("/register")
  // }

  const goToCart = () => {
    navigate("/cart");
  }

  return (
    <section className="top-header">
      <div className="summer-sale">
      Summer Sale - Get 50% off items for Registering Today
          -
       <Link to="/register" className="link-to-register">Get Started</Link>
    </div>

  
      <div className="cart-icon">
        <i className="fa fa-cart-plus cart-icon" style={{fontSize: '48px', cursor: 'pointer'}} onClick={goToCart}> {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}</i>
        </div>
  
      {/* <Link to="/login" className="login" onClick={()=>handleLogOut()}>Logout</Link>
      <Link to="/login" className="login">Login</Link> */}
    </section>
  )
}

