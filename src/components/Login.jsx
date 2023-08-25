import React, { useState } from 'react'
import './LoginStyles.css'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  const inputUsername = (e) => {
        setUsername(e.target.value)
    }

   const inputPassword = (e) => {
        setPassword(e.target.value)
    }


  return (
    <>
     <div className="main-container">
        <div className="login-container">
            <h2>Login</h2>

             <form>
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
                 className="input-login"
                 placeholder="Required"
                 onChange={inputPassword} />
                </label>

                 <button className="login-button">Submit Login</button>
             </form>
       </div>

       <img src="/images/loginImg.jpg" className="loginImg-videoGame" />
       </div>
  </>
  )
}
