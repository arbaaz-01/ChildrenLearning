import React, { useState, useEffect } from 'react';
import '../styles/LearningModule.css';

const Numbers = ({ setScore }) => {
  const [number, setNumber] = useState('');
  const [audio] = useState(new Audio());

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    setNumber(numbers[Math.floor(Math.random() * numbers.length)]);
  }, []);

  const playSound = () => {
    audio.src = `https://api.voicerss.org/?key=a3be2440512c462c83504543bdca02ce&hl=en-us&src=${number}`;
    audio.play();
    setScore(prevScore => prevScore + 1);
  };

  const nextNumber = () => {
    setNumber(numbers[Math.floor(Math.random() * numbers.length)]);
  };

  return (
    <div className="learning-module">
      <h2>Learn Numbers</h2>
      <div className="item-display" onClick={playSound}>
        {number}
      </div>
      <button onClick={nextNumber} className="next-button">Next Number</button>
    </div>
  );
};

export default Numbers;

