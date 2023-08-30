import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts } from './api'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
// import Filter from './Filter'
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
              {/* <Filter products={products} search={searchedProducts} /> */}

            <div className="products-container">
                {products.map((product) => {
                    return (
                        <div className = "my-box">
                          <div className="content" key={product.id}>
                            <h4>{product.title} </h4>
                            <span>Description: {product.description}</span>
                            <span>Category: {product.category} </span>
                            <span>ID: {product.id}</span>
                            <span>Price: {product.price} </span>
                            <img src={product.image} className="productImages"/>
                            
                            <div className="my-buttons">
                                <button><Link to={`/products/${product.id}`} className="see-details-link">See details</Link></button>
                                <button type="button">Add To Cart</button>
                            </div>
                           </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}
    

