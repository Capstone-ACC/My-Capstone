export function saveCartToLocalStorage(cart) {
  localStorage.setItem("Cart", JSON.stringify(cart));
}

export function loadCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}
