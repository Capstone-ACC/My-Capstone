import React from 'react'
import { useState, useEffect} from 'react'
import { getSingleProduct } from './api'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState("")

  let {id} = useParams()

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const singleProduct = await getSingleProduct(id)
        setSingleProduct(singleProduct)

      } catch(error) {
        console.error("Error:", error)
      }
    }

    fetchSingleProduct()

  }, [id])


  return (
    <>
      {singleProduct ? (
        <div className="info-singleProduct">
          <img src={singleProduct.image} alt={singleProduct.title} className="selected-item-image" />
          <h5>{singleProduct.title}</h5>
          <span className="selected-item">{singleProduct.description}</span>
          <span className="selected-item">Category: {singleProduct.category}</span>
          <span className="selected-item">ID: {singleProduct.id}</span>
          <span className="selected-item">Price: ${singleProduct.price}</span>

          <div className="backTo-products">
            <button>Back To Products</button>
            <button>Add To Cart</button>
          </div>
        </div>
     
      ) : (
        <p>Page is loading</p>
      )}
    </>
  )
}