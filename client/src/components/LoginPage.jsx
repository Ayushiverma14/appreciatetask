import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Ensure the CSS is imported

function LoginPage({ setIsAuthenticated }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === 'test' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Login to Fruit.AI</h2>
        <input
          type="text"
          placeholder="UserId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <div className="login-alternative">
          <p>Or log in with:</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

