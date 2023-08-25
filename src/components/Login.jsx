import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login-Register-Styles.css'

export default function Login({setToken}) {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

    //useNavigate
   const navigate = useNavigate()

   const inputUsername = (e) => {
        setUsername(e.target.value)
    }

   const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        alert("You are now logged in, check console.log for token")
    }

    //fetch for login 
    const handelLogin = async () => {
        try {
            const response = await fetch ("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })

            const result = await response.json();
            console.log("Token:", result)
            console.log(`Welcome, ${username}, browse through our products to see whats right for you!`)

            if(result.token) {
                localStorage.setItem('token', result.token)
                setToken(result.token)
            } else {
                console.error("Try again, no token found for this user")
            }
        } catch (error) {
            console.error('There is an error:', error)
        }
        navigate('/main-all-products')
    }

  return (
    <>
      <br/>
      <hr />
        <div className="login-container">
            <h2>Login</h2>

             <form onSubmit={handelSubmit}>
                 <label>
                 Username:

                 <input 
                 value={username}
                 className="input-login"
                 placeholder="Required"
                 onChange={inputUsername} />
                </label>

                 <label>
                 Password:

                 <input 
                 value={password}
                 type="password"
                 className="input-login"
                 placeholder="Required"
                 onChange={inputPassword} />
                </label>

                 <button className="login-button" onClick={handelLogin}>Login</button>
             </form>
       </div>

       <img src="/images/laptop.jpg" className="loginImg" />
  </>
  )
}



