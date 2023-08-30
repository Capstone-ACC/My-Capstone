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
export const getSingleProduct = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1")
        const result = await response.json()
        console.log("Single Product:", result)
        return result;
    } catch (error) {
        console.error("Error:", error)
    }
}

/*sort products*/
// https://fakestoreapi.com/products?sort=desc



/*get all categories*/
// https://fakestoreapi.com/products/categories




/*get all cart*/
// https://fakestoreapi.com/carts




/*get single cart*/
// https://fakestoreapi.com/carts/5




/*add a new product in cart*/
 //turn into async
//  fetch('https://fakestoreapi.com/carts',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     userId:5,
//                     date:2020-02-03,
//                     products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))