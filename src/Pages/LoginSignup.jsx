import React, { useState } from 'react';
import './CSS/Loginsignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Log In");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Working login", formData);
    try {
      const response = await fetch('https://holyconceptsbackend.onrender.com/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();
      console.log("📦 Server response:", responseData);

      if (response.ok && responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const signup = async () => {
    console.log("Working signup", formData);

    try {
      const response = await fetch('https://holyconceptsbackend.onrender.com/signup', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();
      console.log("📦 Server response:", responseData);

      if (response.ok && responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your Password"
            required
          />

          <button
            onClick={() => {
              state === "Log In" ? login() : signup();
            }}
          >
            Continue
          </button>
        </div>

        {state === "Sign Up" ? (
          <p className="signup-login">
            Already have an account?{" "}
            <span
              onClick={() => setState("Log In")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Login here!
            </span>
          </p>
        ) : (
          <p className="signup-login">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Click here!
            </span>
          </p>
        )}

        <div className="loginsignup-aggree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing I agree to the terms and policies.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
