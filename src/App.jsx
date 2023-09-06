import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import  {useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import AddCart from './components/AddCart'

function App() {
  const [token, setToken] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [cartItems, setCart] = useState([])

  //logout
  const handleLogOut = () => {
    localStorage.removeItem("Cart")
    console.log(clear());
  }

  return (
    <>
      <div className="top-header">Summer Sale - Get 50% off for signing up - 
        <Link to="/register" className="shopNow">Shop Now</Link>
        <Link to="/login" className="login" onClick={handleLogOut}>Logout</Link>
        <Link to="/login" className="login">Login</Link>
      </div>

      <Link to="/"><h1>Tech & Styles <br/>
      <div className="secondHeading">The Style of your Heart</div></h1></Link>

      <div className="navBar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/main-all-products">All Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/cart">Cart</Link></li>  
        {/* <li><Link to="/addToCart">Test Adding To Cart</Link></li>   */}
        <li><Link to="/checkout">Check Out</Link></li>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main-all-products" element={<Main/>} />
        <Route path="/addToCart" element={<AddCart />} />
        <Route path="/products/:id" element={<SingleProduct setSelectedItem={setSelectedItem} item={selectedItem} />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cart={cartItems} setCart={setCart}/>} />
      </Routes>
    </>
  )
}

export default App


