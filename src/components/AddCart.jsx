import React, { useState, useEffect } from "react";
import { deleteCart, singleCart, getSingleProduct } from "./api";
import "./css/AddToCart.css";
import { useNavigate } from "react-router-dom";

export default function AddCart() {
  const [cart, setCart] = useState([]);
  const [mySingleCart, setSingleCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  // const [deletedCart, setDeletedCart] = useState({});

  // //increasing a quantity of item
  // function increaseItem(index) {
  //   const updatedProducts = [...products];
  //   updatedProducts[index].quantity += 1;
  //   setProducts(updatedProducts);
  // }

  //get users
  useEffect(() => {
    const myStoredUsername = localStorage.getItem("username");
    setUsername(myStoredUsername);
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

  // // Delete cart
  // const handleDeleteCart = async () => {
  //   try {
  //     const myDeletedItem = await deleteCart();
  //     console.log("Deleted Product:", myDeletedItem);

  //   } catch (error) {
  //     console.error("Error:", error)
  //   }
  // }

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

              <span>{item.quantity}</span>

              <button onClick={() => {}} className="cart-buttons">
                +
              </button>

              <button onClick={() => {}} className="cart-buttons">
                Delete
              </button>
              <hr />
            </div>
          );
        })}
        <button onClick={backToProducts}>Back To Products</button>
        <button onClick={checkout}>Check Out</button>
      </div>
    </>
  );
}
