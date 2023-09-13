import React, { useState, useEffect } from "react";
import { deleteCart, singleCart, getSingleProduct } from "./api";
import "./css/AddToCart.css";
import { useNavigate } from "react-router-dom";

export default function AddCart() {
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
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCart();
  }, []);

  //Fetch Products From Cart
  useEffect(() => {
    const fetchCartProducts = async () => {
      let productList = [];
      cart.products?.map(async (product) => {
        const details = await getSingleProduct(product.productId);
        productList.push(details);
      });
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
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    setTotalPrice(totalPrice);
  }, [products]);

  // Increase the quantity of a product in the cart
  const increaseItemQuantity = (productId) => {
    const updatedProducts = products.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  // // Delete cart
  //I thought maybe i have to pass the id instead?
  const handleDeleteCart = async () => {
    try {
      const userIdToDelete = 5;
      const myDeletedItems = await deleteCart(userIdToDelete);
      console.log("Deleted Cart Success:", myDeletedItems);
      setDeletedCart(myDeletedItems);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //useNavigate
  const navigate = useNavigate();

  function checkout() {
    navigate("/checkout");
  }

  function backToProducts() {
    navigate("/main-all-products");
  }

  return (
    <>
      <div className="second-cart-container">
        <h6>{`${username}'s Cart`}</h6>

        {products.map((item, index) => {
          return (
            <div className="usersProducts" key={index}>
              <img src={item.image} className="userProductImage" />
              <span>{item.title}</span>
              <span>${item.price}</span>

              <button onClick={() => {}} className="cart-buttons">
                -
              </button>

              <span>1{item.quantity}</span>

              <button
                onClick={() => increaseItemQuantity(item.product)}
                className="cart-buttons"
              >
                +
              </button>

              <hr />
            </div>
          );
        })}
        <span className="total-price">Total: $827.25</span>
        <button onClick={backToProducts}>Back To Products</button>
        <button onClick={checkout}>Check Out</button>

        <button onClick={handleDeleteCart}>Delete Cart</button>
      </div>
    </>
  );
}
