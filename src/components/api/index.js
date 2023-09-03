/*fetch all products*/
export const getAllProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        console.log("All Products:",result )
        return result

    } catch (error) {
        console.error("Error:", error)
    }
}


/*fetch single product*/
export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await response.json()
        console.log("Single Product:", result)
        return result;
    } catch (error) {
        console.error("Error:", error)
    }
}


/*get all categories*/
export const getCategories = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const result = await response.json()
        console.log("Categories:", result)
        return result;
        
    } catch(error) {
        console.error("Error:", error)
    }
}



/*sort products*/
// https://fakestoreapi.com/products?sort=desc




/*get all cart*/
export const getAllCarts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/carts")
        const result = await response.json()
        console.log(result)

    } catch (error) {
        console.error("Error:", error)
    }
}


/*get single cart*/
// https://fakestoreapi.com/carts/5 - - - -maybe it has to be the id, of the certain item
export const singleCart = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/carts/${id}`)
        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.error("Error:", error)
    }
}


/*add a new product in cart*/
export const addCart = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/carts", {
            method: "POST",
            body: JSON.stringify({
                userId: 5,
                data: "2020-02-03",
                products: [{productId: 5, quantity: 1}, {productId: 1, quantity: 5}]
            })
        })
        
        const result = await response.json()
        console.log(result)

    } catch (error) {
        console.error("Error:", error)
    }
}