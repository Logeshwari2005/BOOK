// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import bs1 from './bs1.jpg';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: 'user', // Default role is 'user'
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // For demonstration purposes, let's assume authentication is successful
    const isAuthenticated = true;
  
    if (isAuthenticated) {
      // Conditionally navigate based on the user's role
      if (credentials.role === 'admin') {
        navigate('/home'); // Navigate to the home page for admins
      } else {
        navigate('/buy'); // Navigate to the buy page for regular users
      }
    }
  };
  

  return (
    <div className="login-container" style={{ 
      backgroundImage: `url(${bs1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}>
      <div className="login-content">
        <h1>Login Page</h1>
        <form onSubmit={handleFormSubmit} className="login-form">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Role:
            <div className="role-selector">
              <select
                name="role"
                value={credentials.role}
                onChange={handleInputChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </label>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
