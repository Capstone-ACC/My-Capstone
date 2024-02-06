// import { createContext, useEffect, useReducer } from "react";
// import { getCartFromLocalStorage } from "./CartUtils";

// export const CartContext = createContext();

// export const Context = (props) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD":
//         const existingItem = state.find((item) => item.id === action.payload.id);

//         if (existingItem) {
//           // If the item already exists in the cart, increase its quantity by one
//           return state.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           );
//         } else {
//           // If the item doesn't exist in the cart, add it with a quantity of 1
//           return [...state, { ...action.payload, quantity: 1 }];
//         }

//       case "DELETE":
//         return state.filter((item) => item.id !== action.payload.id);
//       case "INCREASE":
//         return state.map((item) => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//       case "DECREASE":
//         return state.map((item) => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         });
//       case "LOAD_CART":
//         return action.payload;
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, []);
//   const cartInfo = { state, dispatch };

//   return (
//     <CartContext.Provider value={cartInfo}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  //add to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  //remove from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  //clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  //carts total
  const getCartTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const roundedTotal = total.toFixed(2); 
  
    return parseFloat(roundedTotal); 
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};