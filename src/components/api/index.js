/* add a new user*/
export const addNewUser = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            body: JSON.stringify({
                email: "davonnejv@mgmail.com",
                username: "Davonne007",
                password: 'Rock&Roll23',
                name: {
                    firstname: 'Davonne',
                    lastname: "Vigil"
                },
                address: {
                    city: 'Dallas',
                    street: "123 Capstone Way",
                    number: 21,
                    zipcode: "76012",
                    geolocation: {
                        lat: '0.0000',
                        long: "0.000"
                    }

                },
                phone: "123-456-7890"
            })
        })

            const result = await response.JSON();
            console.log("Token", result);

            if(result.token) {
                localStorage.setItem("token", result);
                setToken(result.token);
                alert("You are Signed Up! Start Shopping");
                navigate("/main-all-products");
            } else { 
                console.error("Error with sign up, try again")
            } 
    } catch (error) {
        console.error("Error:", error)
    }
}


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
        // console.log(result)  //? is it tailored to each user own cart?? 

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