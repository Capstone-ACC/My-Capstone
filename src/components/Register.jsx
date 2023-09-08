import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-Register-Styles.css";

export default function Register({setToken}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerUsernameInput = (e) => {
    setUserName(e.target.value);
  };

  const registerPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  //add a new user
  const handelRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password");
    } else {
      setError("");

      try {
          const response = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
            body: JSON.stringify({
              email: "davonnejv@mgmail.com",
              username: username,
              password: password,
              name: {
                firstname: "",
                lastname: ""
              },
             address: {
                 city: 'Dallas',
                 street: "123 Capstone Way",
                 number: 21,
                 zipcode: "76012",
                 geolocation: {
                    lat: '0.0000',
                    long: "0.000"
                   }
        
              },
              phone: "123-456-7890"
              })
           })
        
        const result = await response.json();
        console.log("Token", result);
        
        if(result.token) {
          localStorage.setItem("token", result);
          setToken(result.token);
          alert("You are Signed Up! Start Shopping");
          navigate("/main-all-products");
         } else { 
            console.error("Error with sign up, try again")
          } 
        } catch (error) {
            console.error("Error:", error)
        }
    }
  }

  return (
    <>
      <br />
      <hr />

      <div className="register-container">
        <h2>Register For a New Account</h2>

        <form onSubmit={handelRegister}>  
          <label>
            Username:
            <input
              value={username}
              placeholder="Enter desired username"
              className="register-input"
              onChange={registerUsernameInput}
            />
          </label>

          <label>
            Password:
            <input
              value={password}
              type="password"
              placeholder="Enter Password"
              className="register-input"
              onChange={registerPasswordInput}
            />
          </label>

          <button className="register-button">Register</button>
        </form>
      </div>

      <img
        src="/images/mensJackets.jpg"
        className="macBook"
        alt="mac book laptop"
      />
    </>
  );
}
