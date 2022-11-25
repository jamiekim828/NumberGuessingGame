import React from 'react';
import { useState } from 'react';
import Result from './Result';

export default function Game() {
  // state
  const [userNumber, setUserNumber] = useState(0);
  const [computerNumber, setComputerNumber] = useState();
  const [winner, setWinner] = useState();
  const [bigNum, setBigNum] = useState();
  const [showResult, setShowResult] = useState(false);

  const handleUserInput = (e) => {
    setUserNumber(e.target.value);
    setShowResult(true);
  };

  const handleStart = () => {
    const num = Math.floor(Math.random() * 100);
    setComputerNumber(num);
  };

  const handleWinner = () => {
    if (Number(userNumber) === computerNumber) {
      setWinner(true);
    } else if (Number(userNumber) > computerNumber) {
      setBigNum(true);
      setWinner(false);
    } else if (Number(userNumber) < computerNumber) {
      setBigNum(false);
      setWinner(false);
    }
  };

  return (
    <div className='game'>
      <h1>Number Guessing Game</h1>
      <h2>I am thinking of a number between 1-100.</h2>
      <h2>Can you guess?</h2>
      <button onClick={handleStart}>Start</button>
      <div>
        <input value={userNumber} onChange={handleUserInput} />
        <button onClick={handleWinner}>Guess</button>
      </div>
      {showResult ? (
        <Result
          user={userNumber}
          computer={computerNumber}
          winner={winner}
          bigNum={bigNum}
        />
      ) : null}

      <button onClick={handleStart}>Restart</button>
    </div>
  );
}
