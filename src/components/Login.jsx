import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Login-Register-Styles.css";
import { getAllUsers } from "./api";

export default function Login({ setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [loggedInUser, setLoggedInUser] = useState(false);

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

          // Fetching user data, logged in user
          const allUsers = await getAllUsers();
          const loggedInUser = allUsers.find(
            (user) => user.username === username
          );

          if (loggedInUser) {
            localStorage.setItem("cartUserId", loggedInUser.id);
          }

          setToken(result.token);
          // setLoggedInUser(true);
          console.log(loggedInUser);
          alert(`Login Successful ${username}, check console.log for token`);
          console.log("Navigating with state:", { username });
          navigate("/main-all-products", { state: { username } });
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
    };
    fetchAllUsers();
  }, []);

  return (
    <>
      <section className="login-container">
  
          <h3>Login</h3>
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

           <Link to="/register" className="newUserRegister">New User - Register Today</Link>

          <div className="fake-store-info">
            <span>Fake Store API User:</span>
            <span>username: johnd</span>
            <span>password: m38rmF$ </span>
          </div>
          </form>
      </section>

      <img src="/images/shoppingSpree.jpg" className="loginImg" alt="Stylish Girl with shopping bags" />
    </>
  );
}
