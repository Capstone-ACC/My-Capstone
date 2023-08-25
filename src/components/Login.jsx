import React, { useState } from 'react'
import './LoginStyles.css'

export default function Login() {


  return (
    <div className="login-container">
        <h2>Login</h2>

        <form>
            <label>
                Username:
                <input 
                value="username" 
                className="input-login"/>
            </label>

            <label>
                Password:
                <input 
                value="password"
                className="input-login" />
            </label>
        </form>
        
    </div>
  )
}
