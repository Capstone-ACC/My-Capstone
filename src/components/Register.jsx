import React from 'react'
import { useState } from 'react'
import './Login-Register-Styles.css'

export default function Register() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
 
  return (
    <div className="register-container">
      <h2>Register For a New Account</h2>

      <form>
        <label>
         Username:
        <input 
         value={username}
         placeholder="Enter desired username"
         className="register"/>
        </label>

        <label>
         Password:
         <input 
          value={password}
          placeholder="Enter Password"
          className="register" />
        </label>

        <button className="register-button">Register</button>
      </form>
   </div>     
  )
}



