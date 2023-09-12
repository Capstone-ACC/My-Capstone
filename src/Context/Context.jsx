import { createContext, useEffect, useReducer } from "react";
import { getCartFromLocalStorage } from "./CartUtils";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingItem = state.find(
          (item) => action.payload.id === item.id
        );
        if (existingItem) {
          // If the item is already in the cart, increase its quantity
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        } else {
          // If the item is not in the cart, add it with quantity 1
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case "DELETE":
        return state.filter((item) => item.id !== action.payload.id);
      case "INCREASE":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      case "DECREASE":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        case "LOAD_CART":
          return action.payload;
      default:
        return state;
    }
  };

  //local storage
  useEffect(() => {
    const cartSavedData = getCartFromLocalStorage();
    if (cartSavedData > 0) {
      dispatch({ type: "LOAD_CART", payload: cartSavedData})
    }
  }, [])

  const [state, dispatch] = useReducer(reducer, []);
  const cartInfo = { state, dispatch };

  return (
    <CartContext.Provider value={cartInfo}>
      {props.children}
    </CartContext.Provider>
  );
};
