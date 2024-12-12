import React, { useState } from 'react';
import MathGame from '../components/MathGame';
import MemoryGame from '../components/MemoryGame';
import '../styles/Games.css';

const Games = ({ setScore }) => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="games">
      <h2>Fun Games</h2>
      {!activeGame && (
        <div className="game-selection">
          <button onClick={() => setActiveGame('math')}>Math Game</button>
          <button onClick={() => setActiveGame('memory')}>Memory Game</button>
        </div>
      )}
      {activeGame === 'math' && <MathGame setScore={setScore} />}
      {activeGame === 'memory' && <MemoryGame setScore={setScore} />}
      {activeGame && (
        <button onClick={() => setActiveGame(null)} className="back-button">
          Back to Game Selection
        </button>
      )}
    </div>
  );
};

export default Games;

