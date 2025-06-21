import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [state, setState] = useState("Log In");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    setLoading(true);
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
        toast.success("You have successfully logged in");
        navigate('/');
      } else {
        toast.error(responseData.message || responseData.errors?.[0] || "Login failed.");
      }
    } catch (error) {
      console.error("❌ Error during login:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
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
        toast.success("You have signed up successfully");
        navigate('/');
      } else {
        toast.error(responseData.message || responseData.errors?.[0] || "Signup failed.");
      }
    } catch (error) {
      console.error("❌ Error during signup:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
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
              if (loading) return;
              state === "Log In" ? login() : signup();
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}
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
