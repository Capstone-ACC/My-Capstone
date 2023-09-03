import { useState, useEffect } from 'react'
import { addCart, getAllCarts } from './api'

export default function Cart({ cartItems }) {
  const [cart, setCart] = useState({})
  const [allCart, setAllCart] = useState({})

  //add cart
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const myCart = await addCart();
        setCart(myCart)

      } catch (error) {
          console.error("Error:", error)
      }
    }

    fetchCart()
  }, [])

  //get all carts
  useEffect(() => {
    const fetchAllCart = async() => {
      try {
        const myCart = await getAllCarts();
        setAllCart(myCart)

      } catch(error) {
        console.error("Error:", error)
      }
    }

    fetchAllCart();
  },[])

  return (
    <>
     <br/>
     <hr />

     <div>  
        <h5>My Cart</h5>
     </div>
    </>
  )
}

