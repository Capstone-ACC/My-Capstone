import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts } from './api'

export default function Main() {
const [products, setProducts] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const ourProducts = await getAllProducts()
            setProducts(ourProducts)

        } catch(error) {
            console.error("Error:", error)
        }
    }

    fetchProducts()
}, [])


    return (
        <>
         <br/>
         <hr />
    
         <div>  
           All Products
         </div>
        </>
      )
    }
    