import React, { useState, useEffect } from "react";
import { deleteCart, singleCart, getSingleProduct } from "./api";
import "./css/AddToCart.css";
import { useNavigate } from "react-router-dom";
import { saveCartToLocalStorage } from "../Context/CartUtils";

export default function UsersCart() {
  const [cart, setCart] = useState([]);
  const [mySingleCart, setSingleCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [userTotalPrice, setTotalPrice] = useState(0);
  const [deletedCart, setDeletedCart] = useState({});

  //get users
  useEffect(() => {
    const myStoredUsername = localStorage.getItem("username");
    if (myStoredUsername) {
      setUsername(myStoredUsername);
    }
  }, []);

  // Add cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const myCart = await singleCart();
        console.log("Cart Data:", myCart);
        setCart(myCart);
        saveCartToLocalStorage(myCart);

      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCart();
  }, []);

  //Fetch Products From Cart
  // useEffect(() => {
  //   const fetchCartProducts = async () => {
  //     let productList = [];
  //     cart.products?.map(async (product) => {
  //       const details = await getSingleProduct(product.productId);
  //       productList.push(details);
  //     });
  //     setProducts(productList);
  //   };

  //   fetchCartProducts();
  // }, [cart]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      let productList = [];
      
      for (const product of cart.products || []) {
        const details = await getSingleProduct(product.productId);
        productList.push(details);
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
  const increaseItemQuantity = (productId) => {
    if (!Array.isArray(cart)) {
      return;
    }
  
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.productId === productId);
  
    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    }
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
            <span style={{ fontSize: "22pt" }}>Cart is Empty</span>
            <br />
          </>
        ) : (
          products.map((item, index) => {
            return (
              <div className="usersProducts" key={index}>
                <img src={item.image} className="userProductImage" />
                <span>{item.title}</span>
                <span>${item.price}</span>

                <button onClick={() => {}} className="cart-buttons">
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseItemQuantity(item.productId)}
                  className="cart-buttons"
                >
                  +
                </button>

                <hr />
              </div>
            );
          })
        )}

        <span className="total-price">Total: {userTotalPrice.toFixed(2)}</span>
        <button onClick={backToProducts}>Back To Products</button>
        <button onClick={checkout}>Check Out</button>

        <button onClick={handleDeleteCart}>Delete Cart</button>
      </div>
    </>
  );
}