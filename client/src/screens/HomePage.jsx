import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-heading">Fruit.AI</h2>
      <p className='home-description'>be healthy</p>
      <button className="home-button" onClick={() => navigate('/chat')}>Chat</button>
      <button className="home-button" onClick={() => navigate('/translator')}>Translator</button>
      <button className="home-button" onClick={() => navigate('/faq')}>FAQ</button>
      <button className="home-button" onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

export default HomePage;
