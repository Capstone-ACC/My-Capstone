import React from 'react'
import { useState } from 'react'
import './Login-Register-Styles.css'

export default function Register() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const registerUsernameInput = (e) => {
    setUserName(e.target.value)
  }

  const registerPasswordInput = (e) => {
    setPassword(e.target.value)
  }
 
  return (
    <>
    <br />
    <hr />
    
    <div className="register-container">
      <h2>Register For a New Account</h2>

      <form>
        <label>
         Username:

        <input 
         value={username}
         placeholder="Enter desired username"
         className="register-input"
         onChange={registerUsernameInput}/>
        </label>

        <label>
         Password:
         
         <input 
          value={password}
          type="password"
          placeholder="Enter Password"
          className="register-input"
          onChange={registerPasswordInput} />
        </label>

        <button className="register-button">Register</button>
      </form>
   </div>    
   </> 
  )
}



