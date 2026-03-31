import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear field error on change
  };

  // ✅ Validate Inputs
  const validate = () => {
    let tempErrors = {};

    // Email Validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email (e.g. example@gmail.com)";
    }

    // Strong Password Validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      tempErrors.password =
        "Password must be at least 8 characters long & include uppercase, lowercase, number, and special character.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", formData);

      // ✅ Save token & user info in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setSubmitted(true);
      setFormData({ email: "", password: "" });

      // Redirect to Dashboard after success
      setTimeout(() => {
        setSubmitted(false);
        navigate("/student-dashboard");
      }, 1200);
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid email or password!";
      setErrors({ general: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <p className="intro">Welcome back! Please login to continue.</p>

      <form className="signin-form" onSubmit={handleSubmit}>
        {/* ✅ General Server Error */}
        {errors.general && <p className="error server-error">{errors.general}</p>}

        {/* ✅ Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* ✅ Password */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter strong password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* ✅ Forgot Password */}
        <div className="forgot-password">
          <Link to="#">Forgot Password?</Link>
        </div>

        {/* ✅ Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {/* ✅ Success Message */}
        {submitted && (
          <p className="success animate-success">✅ Logged in successfully!</p>
        )}

        {/* ✅ Redirect */}
        <p className="redirect">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
