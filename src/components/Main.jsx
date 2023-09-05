import React from 'react'
import{ useState, useEffect } from 'react'
import { getAllProducts, getCategories } from './api'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import Product from './Product'
import './Main-SearchBar.css'

export default function Main() {
  const [products, setProducts] = useState([])
  const [searchedProducts, setSearchProducts] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

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

  //min- max price
  const handelMinPriceChange = (event) => {
    setMinPrice(event.target.value)
  }

  const handelMaxPriceChange = (event) => {
    setMaxPrice(event.target.value)
  }

  //handling search bar 
  const handleSearchInput = (searchValue) => {
    setSearchProducts(searchValue)
  }  

  const searchedItems = products.filter((product) => {
    const titleMatches = product.title.toLowerCase().includes(searchedProducts.toLowerCase());
    const categoryMatches = selectedCategory === "" || product.category === selectedCategory;
    const priceMatches =
      (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));
    
    return titleMatches && categoryMatches && priceMatches;
  })

    return (
        <>
         <br/>
         <hr />
    
         <section>
            <h3>Customize Your Style and Tech</h3><br/>

            <DropDown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <SearchBar value={searchedProducts} onChange={handleSearchInput} />
           
            <div className="priceFilter-container">
              <label className="productPrice">Min Price:</label>
              <input type="number" value={minPrice} onChange={handelMinPriceChange} className="priceInput" />
     
              <label className="productPrice">Max Price:</label>
             <input type="number" value={maxPrice} onChange={handelMaxPriceChange} className="priceInput" />
            </div>

            <div className="products-container">
                {searchedItems.map((product) => {

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


    