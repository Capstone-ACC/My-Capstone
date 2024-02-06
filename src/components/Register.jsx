import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login-Register-Styles.css";
import { addNewUser } from "./api";

export default function Register({ setToken }) {
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
  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await addNewUser(username, password);

    if (!username || !password) {
      setError("Please enter both username and password");
    } else {
      alert(`Success, Welcome ${username}! You are now registered`);
      console.log("New User ID:", result);
      navigate("/main-all-products");
      setError("");
    }
  };

  return (
    <>
      <br />
      <hr />

      <div className="register-container">
        <h2>Register For a New Account</h2>

        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input
              value={username}
              placeholder="Enter desired username"
              className="register-input"
              onChange={registerUsernameInput}
            />
          </label>

          {error && <span className="error-message">{error}</span>}

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
