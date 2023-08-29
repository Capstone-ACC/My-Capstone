import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts } from './api'
import SearchBar from './SearchBar'

export default function Main() {
const [products, setProducts] = useState([])
// const [searchedProducts, setSearch] = useState("")

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
    
         <section>
            <h3>Customize Your Style and Tech</h3>
            <SearchBar />


           


         </section>
        </>
      )
    }
    

