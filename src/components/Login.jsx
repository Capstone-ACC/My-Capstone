import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login-Register-Styles.css";
import { getAllUsers } from "./api";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const inputUsername = (e) => {
    setUsername(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  //handel submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password");
    } else {
      setError("");

      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const result = await response.json();
        console.log("Token:", result);

        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("username", username);
          localStorage.setItem("id", id);

          setToken(result.token);
          alert(`Login Successful ${username}, check console.log for token`);
          navigate("/main-all-products");
        } else {
          console.error("Try again, no token found for this user");
        }
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };

  //all users
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        console.log("All Users", allUsers);

      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchAllUsers();
  },[]);

  return (
    <>
      <br />
      <hr />
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={username}
              className="input-login"
              placeholder="Required"
              onChange={inputUsername}
            />
          </label>

          <label>
            Password:
            <input
              value={password}
              type="password"
              className="input-login"
              placeholder="Required"
              onChange={inputPassword}
            />
          </label>

          {error && <span className="error-message">{error}</span>}

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>

      <img src="/images/shoppingSpree.jpg" className="loginImg" />
    </>
  );
}
