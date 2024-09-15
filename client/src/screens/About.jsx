import React from 'react';
import "./About.css";
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='about-container'>
      <button className="back-button" onClick={goBack}>
        ←
      </button>
      <h2>About Us</h2>
      <p className='about-container-p'>
        Welcome to Fruit.AI — where nature meets technology!
      </p>
      <p className='about-container-p'>
        At Fruit.AI, we're passionate about revolutionizing the way people explore, understand, and enjoy fruits. 
        Our platform harnesses the power of Artificial Intelligence to bring you a unique and interactive experience, 
        making it easier than ever to discover new fruits, learn about their health benefits, and connect with a 
        community of fruit enthusiasts.
      </p>

      <h3>Our Mission</h3>
      <p className='about-container-p'>
        Our mission is simple: to make fruit knowledge accessible, engaging, and fun for everyone. Whether you're a health-conscious 
        consumer, a curious learner, or a fruit aficionado, Fruit.AI is here to provide you with instant information, personalized 
        recommendations, and insights on a wide variety of fruits from around the world.
      </p>

      <h3>Why Fruit.AI?</h3>
      <ul className='about-ul'>
        <li className='about-container-p'>
          <strong>Interactive Chatbot:</strong> Our AI-powered chatbot is your personal guide to the world of fruits. 
          From nutritional facts to interesting trivia, the chatbot can provide you with tailored answers and recommendations 
          based on your preferences.
        </li>
        <li className='about-container-p'>
          <strong>Fruit Explorer:</strong> Browse through a vibrant collection of fruits, each presented as beautifully designed cards. 
          Click on any fruit to dive deeper into its nutritional values, origins, and unique qualities.
        </li>
        <li className='about-container-p'>
          <strong>Language Translator:</strong> Get fruit-related content and terminology translated into your preferred language, 
          helping you connect with the fruits and cultures from different regions.
        </li>
        <li className='about-container-p'>
          <strong>Community Engagement:</strong> Have questions? Our FAQ section addresses common fruit-related queries. 
          And if you're still curious, feel free to ask!
        </li>
        <li className='about-container-p'>
          <strong>Educational & Fun:</strong> Whether you're here for learning or just for fun, Fruit.AI offers a delightful experience 
          that blends education with entertainment.
        </li>
      </ul>

      <h3>Our Vision</h3>
      <p className='about-container-p'>
        We believe in the power of AI to transform how we interact with everyday things, including the fruits we eat. 
        Our vision is to make Fruit.AI a trusted resource for anyone looking to deepen their understanding of fruits and their health benefits. 
        We aim to create a global platform where users can share knowledge, tips, and discover fruits that they never knew existed.
      </p>

      <p className='about-container-p'>
        Join us on this flavorful journey and let Fruit.AI add a touch of technology to your healthy lifestyle!
      </p>
    </div>
  );
}

export default AboutPage;
