import React, { useState, useEffect } from 'react';
import '../styles/LearningModule.css';

const Alphabet = ({ setScore }) => {
  const [letter, setLetter] = useState('');
  const [audio] = useState(new Audio());

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    setLetter(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }, []);

  const playSound = () => {
    audio.src = `https://api.voicerss.org/?key=a3be2440512c462c83504543bdca02ce&hl=en-us&src=${letter}`;
    audio.play();
    setScore(prevScore => prevScore + 1);
  };

  const nextLetter = () => {
    setLetter(alphabet[Math.floor(Math.random() * alphabet.length)]);
  };

  return (
    <div className="learning-module">
      <h2>Learn Alphabet</h2>
      <div className="item-display" onClick={playSound}>
        {letter}
      </div>
      <button onClick={nextLetter} className="next-button">Next Letter</button>
    </div>
  );
};

export default Alphabet;

