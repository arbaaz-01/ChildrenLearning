import React, { useState, useEffect } from 'react';
import '../styles/MemoryGame.css';

const MemoryGame = ({ setScore }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const images = [
    '/images/memory/apple.png',
    '/images/memory/banana.png',
    '/images/memory/cherry.jpg',
    '/images/memory/grape.jpeg',
    '/images/memory/orange.jpg',
    '/images/memory/strawberry.png',
  ];

  useEffect(() => {
    initializeCards();
  }, []);

  const initializeCards = () => {
    const duplicatedImages = [...images, ...images];
    const shuffledCards = duplicatedImages
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image }));
    setCards(shuffledCards);
  };

  const handleClick = (id) => {
    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setFlipped([flipped[0], id]);
      setDisabled(true);

      if (cards[flipped[0]].image === cards[id].image) {
        setSolved([...solved, flipped[0], id]);
        setFlipped([]);
        setDisabled(false);
        setScore(prevScore => prevScore + 10);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);

  return (
    <div className="memory-game">
      <h3>Memory Game</h3>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${isFlipped(card.id) ? 'flipped' : ''}`}
            onClick={() => !disabled && !isFlipped(card.id) && handleClick(card.id)}
          >
            {isFlipped(card.id) ? (
              <img src={card.image} alt="card" />
            ) : (
              <div className="card-back" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;

