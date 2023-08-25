import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import Checkout from './components/Checkout'
import Cart from './Cart'


function App() {

  return (
    <>
      <h1>Tech & Styles <br/>
      <div className="secondHeading">The Style of your Heart</div></h1>

      <div className="navBar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/main">All Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/checkout">Check Out</Link></li>
        <li><Link to="/cart">Cart</Link></li>  
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App



