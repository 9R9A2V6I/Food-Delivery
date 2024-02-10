import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);

    const storedEmail = localStorage.getItem('Email');
    const storedPassword = localStorage.getItem('Password');

    if (
      inputFields.email === storedEmail &&
      inputFields.password === storedPassword
    ) {
      // Successfully logged in, navigate to Home Page
      navigate('/');
    } else {
      // Display error for incorrect email/password
      setErrors('Incorrect email or password' );
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
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
           <p className='errorMessage'>{errors}</p>
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

export default Login;
