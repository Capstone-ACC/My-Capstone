import { createContext, useReducer } from "react"

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [])
  const cartInfo = { state, dispatch };

  return (
    <CartContext.Provider value={cartInfo}>
      {props.children}
    </CartContext.Provider>
  )
}
