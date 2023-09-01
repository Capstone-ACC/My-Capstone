import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts, getCategories } from './api'
import SearchBar from './SearchBar'
// import Filter from './Filter'
import DropDown from './DropDown'
import Product from './Product'
import './Main-SearchBar.css'

export default function Main() {
  const [products, setProducts] = useState([])
  const [searchedProducts, setSearchProducts] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  // const [filteredProducts, setFilteredProducts] = useState([])
  
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

  const handleSearchInput = (searchValue) => {
    setSearchProducts(searchValue)
  }  

    return (
        <>
         <br/>
         <hr />
    
         <section>
            <h3>Customize Your Style and Tech</h3>
            <SearchBar value={searchedProducts} onChange={handleSearchInput} />
            {/* <Filter products={products} search={searchedProducts} /> */}
              <DropDown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              
            <div className="products-container">
                {products.map((product) => {

                  if(selectedCategory !== "") {
                    if (product.category === selectedCategory) {
                      return (
                         <Product 
                           product={product} 
                           key={product.id} />
                      )
                    } 
                   } else {
                      return (
                      <Product 
                        product={product}
                        key={product.id} />
                      )
                   }
                })}
            </div>
        </section>
       </>
    )
}

    


    
