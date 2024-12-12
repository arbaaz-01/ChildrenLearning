import React, { useState, useEffect } from 'react';
import '../styles/LearningModule.css';


const Animals = ({ setScore }) => {
  const [animal, setAnimal] = useState('');
  const [audio] = useState(new Audio());

  const animals = [
    { name: 'Lion', image: '/images/animals/lion.avif' },
    { name: 'Elephant', image: '/images/animals/elephant.avif' },
    { name: 'Giraffe', image: '/images/animals/giraffee.webp' },
    { name: 'Monkey', image: '/images/animals/monkey.png' },
    { name: 'Penguin', image: '/images/animals/penguin.webp' },
  ];

  useEffect(() => {
    setAnimal(animals[Math.floor(Math.random() * animals.length)]);
  }, []);

  const playSound = () => {
    audio.src = `https://api.voicerss.org/?key=a3be2440512c462c83504543bdca02ce&hl=en-us&src=${animal.name}`;
    audio.play();
    setScore(prevScore => prevScore + 1);
  };

  const nextAnimal = () => {
    setAnimal(animals[Math.floor(Math.random() * animals.length)]);
  };

  return (
    <div className="learning-module">
      <h2>Learn Animals</h2>
      <div className="item-display" onClick={playSound}>
        <img src={animal.image} alt={animal.name} className="animal-image" />
      </div>
      <p>{animal.name}</p>
      <button onClick={nextAnimal} className="next-button">Next Animal</button>
    </div>
  );
};

export default Animals;

