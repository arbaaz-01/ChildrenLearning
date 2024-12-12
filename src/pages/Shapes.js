import React, { useState, useEffect } from 'react';
import '../styles/LearningModule.css';

const Shapes = ({ setScore }) => {
  const [shape, setShape] = useState('');
  const [audio] = useState(new Audio());

  const shapes = [
    { name: 'Circle', svg: '<circle cx="50" cy="50" r="40" fill="currentColor" />' },
    { name: 'Square', svg: '<rect x="10" y="10" width="80" height="80" fill="currentColor" />' },
    { name: 'Triangle', svg: '<polygon points="50,10 90,90 10,90" fill="currentColor" />' },
    { name: 'Star', svg: '<polygon points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35" fill="currentColor" />' },
    { name: 'Heart', svg: '<path d="M50,30 Q50,60 90,90 L50,70 L10,90 Q50,60 50,30 Z" fill="currentColor" />' },
  ];

  useEffect(() => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);
  }, []);

  const playSound = () => {
    audio.src = `https://api.voicerss.org/?key=a3be2440512c462c83504543bdca02ce&hl=en-us&src=${shape.name}`;
    audio.play();
    setScore(prevScore => prevScore + 1);
  };

  const nextShape = () => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);
  };

  return (
    <div className="learning-module">
      <h2>Learn Shapes</h2>
      <div className="item-display" onClick={playSound}>
        <svg viewBox="0 0 100 100" width="200" height="200" dangerouslySetInnerHTML={{ __html: shape.svg }} />
      </div>
      <p>{shape.name}</p>
      <button onClick={nextShape} className="next-button">Next Shape</button>
    </div>
  );
};

export default Shapes;

