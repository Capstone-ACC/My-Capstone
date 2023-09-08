export function saveCartToLocalStorage(cart) {
  localStorage.setItem("Cart", JSON.stringify(cart));
}

export function loadCart() {
  const savedCart = localStorage.getItem("Cart");
  return savedCart ? JSON.parse(savedCart) : [];
}
