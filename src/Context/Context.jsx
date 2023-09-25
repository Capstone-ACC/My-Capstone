import { createContext, useEffect, useReducer } from "react";
import { getCartFromLocalStorage } from "./CartUtils";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const addItem = state.filter((item) => action.payload.id === item.id);
        if (addItem.length > 0) {
          return state; 
        } else {
          return [...state, action.payload];
        }

      case "DELETE":
        return state.filter((item) => item.id !== action.payload.id);
      case "INCREASE":
        const productIncrease = state.map((item) => {
          if(item.id === action.payload.id) {
           return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          } 
        })
        return productIncrease;
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
