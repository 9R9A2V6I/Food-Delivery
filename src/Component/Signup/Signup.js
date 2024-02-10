import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};

    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValues.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation using regex
    // At least 8 characters, 1 symbol, and 1 capital letter
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(inputValues.password)) {
      errors.password =
        "Password should be at least 8 characters with 1 symbol and 1 capital letter";
    }

    if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Password not matched";
    }

    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
    // Navigate to the login page after successful submission
    navigate("/login");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors, submitting]);

  return (
    <div>
      <div className="login-box">
        {Object.keys(errors).length === 0 && submitting ? (
          <span className="success">Successfully submitted ✓</span>
        ) : null}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required=""
              value={inputFields.email}
              onChange={handleChange}
            />
            <label>Email</label>
            {errors.email ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required=""
              value={inputFields.password}
              onChange={handleChange}
            />
            <label>Password</label>
            {errors.password ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </div>
          <div className="user-box">
            <input
              type="password"
              name="confirmPassword"
              value={inputFields.confirmPassword}
              onChange={handleChange}
              required=""
            />
            <label>Confirm Password</label>
            {errors.confirmPassword ? (
              <p className="error">{errors.confirmPassword}</p>
            ) : null}
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
