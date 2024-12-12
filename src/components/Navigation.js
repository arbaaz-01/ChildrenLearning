import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/numbers">Numbers</Link></li>
        <li><Link to="/alphabet">Alphabet</Link></li>
        <li><Link to="/shapes">Shapes</Link></li>
        <li><Link to="/animals">Animals</Link></li>
        <li><Link to="/games">Games</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

