import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
import Alphabet from './pages/Alphabet';
import Shapes from './pages/Shapes';
import Animals from './pages/Animals';
import Games from './pages/Games';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Profile name="Arbaz" age={8} score={score} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/numbers" element={<Numbers setScore={setScore} />} />
            <Route path="/alphabet" element={<Alphabet setScore={setScore} />} />
            <Route path="/shapes" element={<Shapes setScore={setScore} />} />
            <Route path="/animals" element={<Animals setScore={setScore} />} />
            <Route path="/games" element={<Games setScore={setScore} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

