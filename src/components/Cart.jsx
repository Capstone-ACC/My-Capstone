import { useState, useEffect } from 'react'
import { addCart } from './api'

export default function Cart() {
  const [cart, setCart] = useState({})

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

