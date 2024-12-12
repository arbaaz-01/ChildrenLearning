import React, { useState, useEffect } from 'react';
import '../styles/MathGame.css';

const MathGame = ({ setScore }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    setNumber1(Math.floor(Math.random() * 10));
    setNumber2(Math.floor(Math.random() * 10));
    setOperation(['+', '-', 'x'][Math.floor(Math.random() * 3)]);
    setUserAnswer('');
    setMessage('');
  };

  const checkAnswer = () => {
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case 'x':
        correctAnswer = number1 * number2;
        break;
      default:
        correctAnswer = 0;
    }

    if (parseInt(userAnswer) === correctAnswer) {
      setMessage('Correct! Great job!');
      setScore(prevScore => prevScore + 5);
      setTimeout(generateNewQuestion, 2000);
    } else {
      setMessage('Oops! Try again.');
    }
  };

  return (
    <div className="math-game">
      <h3>Math Game</h3>
      <div className="question">
        {number1} {operation} {number2} = ?
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="answer-input"
      />
      <button onClick={checkAnswer} className="check-button">Check</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default MathGame;

