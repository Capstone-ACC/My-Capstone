import { useState, useEffect, useContext } from "react";
import { getSingleProduct } from "./api";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import './css/SingleProduct.css';

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState("");
  const {addToCart} = useContext(CartContext)

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

  return (
    <>
      {singleProduct ? (
        <section className="info-singleProduct">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="selected-item-image"
          />

          <section className="selected-item">
            <h5>{singleProduct.title}</h5>
            <span>{singleProduct.description}</span>
            <span >
              Category: {singleProduct.category}
            </span>
            <span>ID: {singleProduct.id}</span>
            <span>Price: ${singleProduct.price}</span>
          </section>

          <div className="backTo-products">
            <button>
              <Link to="/main-all-products" className="link-to-go-back">
                Back To Products
              </Link>
            </button>

           <button onClick={() => addToCart(singleProduct)}>
             <Link to="/cart" className="addToCart">
               Add To Cart
             </Link>
             <img src="/images/cart.png" alt="Cart Icon" />
           </button>
          </div>
        </section>
      ) : (
        <p>Page is loading</p>
      )}
    </>
  );
}
