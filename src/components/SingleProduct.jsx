import React from "react";
import { useState, useEffect, useContext } from "react";
import { getSingleProduct } from "./api";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import { saveCartToLocalStorage } from "../Context/CartUtils";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const singleProduct = await getSingleProduct(id);
        setSingleProduct(singleProduct);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  //cart functionality
  const stateOfCart = useContext(CartContext);
  const dispatch = stateOfCart.dispatch;

  return (
    <>
      {singleProduct ? (
        <div className="info-singleProduct">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="selected-item-image"
          />

          <h5>{singleProduct.title}</h5>
          <span className="selected-item">{singleProduct.description}</span>
          <span className="selected-item">
            Category: {singleProduct.category}
          </span>
          <span className="selected-item">ID: {singleProduct.id}</span>
          <span className="selected-item">Price: ${singleProduct.price}</span>

          <div className="backTo-products">
            <button>
              <Link to="/main-all-products" className="link-to-go-back">
                Back To Products
              </Link>
            </button>

           <button 
           onClick={() => {
            const existingItem = stateOfCart.state.find((item) => item.id ===singleProduct.id);
            if (existingItem) {
              dispatch({type: "INCREASE", payload: singleProduct});
            } else {
              dispatch({type: "ADD", payload: {...singleProduct, quantity: 1}});
            }

            console.log("Added To Donation Cart", singleProduct);
            saveCartToLocalStorage([...stateOfCart.state, singleProduct]);
           }}>
             <Link to="/cart" className="addToCart">
               Add To Cart
             </Link>
             <img src="/images/cart.png" alt="Cart Icon" />
           </button>
          </div>
        </div>
      ) : (
        <p>Page is loading</p>
      )}
    </>
  );
}
