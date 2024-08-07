import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/cart';
import "./css/TopHeader-Started.css";
import GetStarted from './GetStarted'

export default function TopHeader() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  }

  // //handle logout
  const handleLogOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("username");
  clearCart();
}

  return (
    <>
    <header className="top-header">
      <span className="cart-icon">
        <i className="fa fa-cart-plus cart-icon" onClick={goToCart}> {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}</i>
        </span>
  
        <Link to="/login" className="login">Login</Link>
        <Link  to="/login" onClick={handleLogOut} className="login">Logout</Link>
    </header>
    <GetStarted />

    </>
  )
}

