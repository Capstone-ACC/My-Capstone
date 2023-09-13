// /* add a new user*/
export const addNewUser = async (registerUsername, registerPassword) => {
    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            body: JSON.stringify({
                email: "davonnejv@mgmail.com",
                username: registerUsername,
                password: registerPassword,
                name: {
                    firstname: "",
                    lastname: ""
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

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error registering a user:", error)
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

//Cart

/*get single cart*/
export const singleCart = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/carts/2")
        const result = await response.json()
        return result;

    } catch (error) {
        console.error("Error:", error)
    }
}

/*add a new product in cart*/
export const addCart = async (userId, products) => {
    console.log(products)
    try {
        const response = await fetch("https://fakestoreapi.com/carts", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
                data: "2020-02-03",
                products: products
            }),
            headers: {
                "Content-Type": "application.json"
            }
        })
        
        const result = await response.json()
        console.log(result)
        return result;

    } catch (error) {
        console.error("Error:", error)
        return [];
    }
}


//delete a product from cart
export const deleteCart = async (userId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${userId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        console.log("Users Cart has been deleted");
      } else {
        console.error("Failed to delete cart");
      }
    } catch (error) {
      console.error("Error:", error);
    }  
};

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