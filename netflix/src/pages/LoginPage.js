import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  //   const [username, password] = ["suhaib", "suhaib"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="get-started1">
      <nav className="navbar">
        <Link to="/">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix logo"
          />
        </Link>
      </nav>

      <div className="sign-in-container">
        <p className="heading">Sign In</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {username === "123" || password === "123" ? (
            <Link to="/home">
              <button>Sign In</button>
            </Link>
          ) : (
            <>
              <button type="submit">Sign In</button>
            </>
          )}
        </form>
        <div className="remember-container">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            Remember me
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
