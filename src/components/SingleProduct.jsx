import React from 'react'
import { useState, useEffect} from 'react'
import { getSingleProduct } from './api'

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState("")

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const mySingleProduct = await getSingleProduct();
        setSingleProduct(mySingleProduct);

      } catch(error) {
        console.error("Error:", error)
      }
    }

    fetchSingleProduct()

  }, [])

  return (
    <div>
      Single Product
    </div>
  )
}
