import React, { useState, useEffect } from "react";
import { deleteCart, singleCart, getSingleProduct } from "./api";
import "./css/UsersCart.css";
import { useNavigate } from "react-router-dom";
import { saveCartToLocalStorage } from "../Context/CartUtils";

export default function UsersCart() {
  const [cart, setCart] = useState([]);
  const [mySingleCart, setSingleCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [userTotalPrice, setTotalPrice] = useState(0);
  const [deletedCart, setDeletedCart] = useState({});
  const [id, setId] = useState("");

  // //trying this fetch cart
  // useEffect(() => {
  //   const fetchCart = async (id) => {
  //     try {
  //       if(id) {
  //         const myCart = await singleCart(id);
  //         console.log("Cart Data:", myCart);
  //         setCart(myCart);
  //         saveCartToLocalStorage(myCart);
  //       }

  //     } catch (error) {
  //       console.error("Error Fetching Cart:", error);
  //     }
  //   }

  //   fetchCart()
  // }, [id])

  //** but this works below.,.,. 

  //fetch cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const myStoredUsername = localStorage.getItem("username");
        if (myStoredUsername) {
          setUsername(myStoredUsername);

          const myCart = await singleCart(myStoredUsername); 
          console.log("Cart Data:", myCart);
          setCart(myCart);
          saveCartToLocalStorage(myCart);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCart();
  }, []);


//fetch cart products
  useEffect(() => {
    const fetchCartProducts = async () => {
      let productList = [];
      
      for (const product of cart.products || []) {
        const details = await getSingleProduct(product.productId);
        productList.push({...details, quantity: product.quantity});
      }
  
      setProducts(productList);
    };
  
    fetchCartProducts();
  }, [cart]);

  //single cart for user
  useEffect(() => {
    const fetchSingleCart = async () => {
      try {
        const mySingleCart = await singleCart();
        setSingleCart(mySingleCart);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchSingleCart();
  }, []);

  //total price
  useEffect(() => {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price * product.quantity;
    }
  
    setTotalPrice(totalPrice);
  }, [products, cart]);


  // Increase the quantity of a product in the cart
  //can we even do this, it seems like the users cart is set and stone?? 
  //i did this on my other cart, Cart.jsx
  const increaseItemQuantity = () => {

  };


  //Delete cart
  const handleDeleteCart = async () => {
    try {
      const userIdToDelete = 5;
      const myDeletedItems = await deleteCart(userIdToDelete);
      setDeletedCart(myDeletedItems);
      setCart([]);
      setProducts([]);
      setTotalPrice(0);
      alert(`${username}'s cart has been deleted. Add More Items`);

      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  //useNavigate
  const navigate = useNavigate();

  function checkout() {
    navigate("/checkout", {
      state: {
        cart: cart,
        products: products,
      },
    });
  }

  function backToProducts() {
    navigate("/main-all-products");
  }

  return (
    <>
      <div className="second-cart-container">
        <h6>{`${username}'s Cart`}</h6>

        {products.length === 0 ? (
          <>
            <span style={{ fontSize: "22pt" }}>Please Login To See Your Cart</span>
            <br />
          </>
        ) : (
          products.map((item, index) => {
            return (
              <div className="usersProducts" key={index}>
                <img src={item.image} className="userProductImage" />
                <span>{item.title}</span>
                <span>${item.price}</span>

               <div className="cart-buttons">
               <button onClick={() => {}} >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseItemQuantity(item.productId)}
                >
                  +
                </button>
               </div>

                <hr />
              </div>
            );
          })
        )}

        <span className="total-price">Total: ${userTotalPrice.toFixed(2)}</span>
        <button onClick={backToProducts}>Back To Products</button>
        <button onClick={checkout}>Check Out</button>

        <button onClick={handleDeleteCart}>Delete Cart</button>
      </div>
    </>
  );
}