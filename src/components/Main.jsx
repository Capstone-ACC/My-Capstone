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
                {products.map((product) => {
                    return (
                        <div className = "my-box">
                          <div className="content" key={product.id}>
                            <h4>{product.title} </h4>
                            <p1>Description: {product.description}</p1>
                            <p1>Category: {product.category} </p1>
                            <p1>ID: {product.id}</p1>
                            <p1>Price: {product.price} </p1>
                            <img src={product.image} className="productImages"/>
                            
                            <div className="my-buttons">
                                <button type="button">See Details</button>
                                <button type="button">Add To Cart</button>
                            </div>
                           </div>
                        </div>
                    )
                })}
            </div> {/* last div to products-container */}
        </section>
        </>
    )
}
    
