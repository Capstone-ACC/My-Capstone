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
    <div className="single-product-container">
      {singleProduct ? (
        <>
        <img src={singleProduct.image} alt={singleProduct.title} className="selected-item-image" />
          <h5>{singleProduct.title}</h5>
          <span>{singleProduct.description}</span>
          <span>{singleProduct.category}</span>
          <span>{singleProduct.id}</span>
          <span>{singleProduct.price}</span>
        </>
      ) : (
        <p>Page is loading</p>
      )}
    </div>
  )
}