import { createContext, useReducer } from "react"

export const CartContext = createContext();
export const Context = (props) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingItem = state.find((item) => action.payload.id === item.id);
        if (existingItem) {
          // If the item is already in the cart, increase its quantity
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          })
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
        })
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, [])
  const cartInfo = { state, dispatch };

  return (
    <CartContext.Provider value={cartInfo}>
      {props.children}
    </CartContext.Provider>
  )
}


