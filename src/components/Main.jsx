import { useState, useEffect } from "react";
import { getAllProducts, getCategories } from "./api";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import Product from "./Product";
import PriceFilter from "./PriceFilter";
import "./css/Main-SearchBar.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchProducts] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const ourProducts = await getAllProducts();
        setProducts(ourProducts);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  //handling search bar, price range, and clear filter
  const handleSearchInput = (searchValue) => {
    setSearchProducts(searchValue);
  };

  const handlePriceFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const clearFilter = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  const clearCategory = () => {
    setSelectedCategory("");
  };
  
  const searchedItems = products.filter((product) => {
    const titleMatches = product.title.toLowerCase().includes(searchedProducts.toLowerCase());
    const categoryMatches =selectedCategory === "" || product.category === selectedCategory;
    const priceSearch =
      (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));

    return titleMatches && categoryMatches && priceSearch;
  });

  return (
    <>
      <hr />

      <section>
        <h3>Customize Your Style</h3>

        <div className="">
          <DropDown
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SearchBar value={searchedProducts} onChange={handleSearchInput} />
          <PriceFilter onPriceChange={handlePriceFilter} />
        </div>

        <button onClick={clearFilter}>Clear Price Filter</button>
        <button onClick={clearCategory}>Clear Category</button>

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
  );
}
