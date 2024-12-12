import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to FunLearn Kids!</h1>
      <p>Choose a category to start learning:</p>
      <div className="category-grid">
        <Link to="/numbers" className="category-item numbers">Numbers</Link>
        <Link to="/alphabet" className="category-item alphabet">Alphabet</Link>
        <Link to="/shapes" className="category-item shapes">Shapes</Link>
        <Link to="/animals" className="category-item animals">Animals</Link>
        <Link to="/games" className="category-item gam">Games</Link>
      </div>
    </div>
  );
};

export default Home;

