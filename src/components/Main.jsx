import { useState, useEffect } from "react"
import { getAllProducts, getCategories } from "./api"
import SearchBar from "./SearchBar"
import DropDown from "./DropDown"
import Product from "./Product"
import "./Main-SearchBar.css"

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
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  //min- max price
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  }

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  }

  //handling search bar
  const handleSearchInput = (searchValue) => {
    setSearchProducts(searchValue);
  }

  const searchedItems = products.filter((product) => {
    const titleMatches = product.title
      .toLowerCase()
      .includes(searchedProducts.toLowerCase());

    const categoryMatches =
      selectedCategory === "" || product.category === selectedCategory;

    const priceSearch =
      (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));

    return titleMatches && categoryMatches && priceSearch;
  })

  return (
    <>
      <br />
      <hr />

      <section>
        <h3>Customize Your Style and Tech</h3>
        <br />

        <DropDown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchBar value={searchedProducts} onChange={handleSearchInput} />

        <div className="priceFilter-container">
          <label className="productPrice">Min Price:</label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="priceInput"
            placeholder="Enter Minimal Price"
          />

          <label className="productPrice">Max Price:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="priceInput"
            placeholder="Enter Maximum Price"
          />
        </div>

        <div className="products-container">
          {searchedItems.map((product) => {
            if (selectedCategory !== "") {
              if (product.category === selectedCategory) {
                return <Product product={product} key={product.id} />;
              }
            } else {
              return <Product product={product} key={product.id} />;
            }
          })}
        </div>
      </section>
    </>
  )
}
