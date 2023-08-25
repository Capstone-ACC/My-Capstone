/*fetch all products*/
//async function
//try catch
//set variable to the api url, fetch, await
//set the variable to set as json, which is also declared to a variable
//console log the new variable
// return 
//catch error
export const getAllProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        console.log("All Products:",result )
        return result.products

    } catch (error) {
        console.error("Error:", error)
    }
}