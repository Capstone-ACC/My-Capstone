import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts } from './api'
import SearchBar from './SearchBar'
import './Main-SearchBar.css'

export default function Main() {
const [products, setProducts] = useState([])
const [searchedProducts, setSearchProducts] = useState("")

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

const handelSearchInput = (searchValue) => {
    setSearchProducts(searchValue)
}

    return (
        <>
         <br/>
         <hr />
    
         <section>
            <h3>Customize Your Style and Tech</h3>
            <SearchBar value={searchedProducts} onChange={handelSearchInput} />

            <div className="products-container">
                <div className = "my-box">
                    <div className="content">
                        <h4>Title: </h4>
                        <p1>Description: </p1>
                        <p1>Category: </p1>
                        <p1>ID: </p1>
                        <p1>Price: </p1>
                        <h5>Image: </h5>
                    </div>
                </div>
            </div> {/* last div to product-container */}
        </section>
        </>
      )
    }
    

