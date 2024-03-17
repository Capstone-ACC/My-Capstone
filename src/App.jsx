import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import  { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import MyCart from './components/MyCart';
import SingleProduct from './components/SingleProduct';
import TopHeader from './components/TopHeader';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import { CartProvider } from './Context/cart';


function App() {
  const [token, setToken] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  
  return (
    <>
      <CartProvider>
          <TopHeader size={cart.length} />
          <Link to="/"><h1>Tech & Styles <br/>
          <div className="secondHeading">The Style of your Heart</div></h1></Link>
            <div className="navBar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/main-all-products">All Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              
            </div>
            <hr/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route path="/login" element={<Login setToken={setToken}  />} />
            <Route path="/main-all-products" element={<Main/>} />
            <Route path="/products/:id" element={<SingleProduct setSelectedItem={setSelectedItem} item={selectedItem} />} />
          
            <Route path="/cart" element={<MyCart setCart={setCart} />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
       </CartProvider>
      </>
  );
}

export default App


