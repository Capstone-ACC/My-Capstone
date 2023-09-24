export const saveCartToLocalStorage = (cart) => {
  try {
    const cartData = JSON.stringify(cart);
    localStorage.setItem("cart", cartData)
  } catch (error) {
    console.error("Error saving cart to local storage")
  }
}

export const getCartFromLocalStorage = () => {
  try {
    const myCartData = localStorage.getItem("cart");
    if (myCartData) {
      return JSON.parse(myCartData)
    }
  } catch (error) {
    console.error("Error retrieving cart from local storage")
  }
}

