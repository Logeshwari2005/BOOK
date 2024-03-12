import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bs5 from './bs5.jpg'; // Import the image
import './SignUp.css'; // Import additional styles

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    // Add your signup logic here
    // After successful signup, navigate to the home page
    navigate('/login');
  };

  return (
    <div className="signup-container" style={{ 
      backgroundImage: `url(${bs5})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}>
       <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit} className="signup-form">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
