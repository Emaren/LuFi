import React, { useState } from "react";
import "./LoginScreen.css";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ onLoginSuccess, goToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(); // Navigate to MainScreen on success
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <h2>Email</h2>
          <label htmlFor="email">Enter your email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h2>Password</h2>
          <label htmlFor="password">Enter your password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <button className="signup-button" onClick={goToSignup}>
        Go To Sign Up Page
      </button>
    </div>
  );
};

export default LoginScreen;
