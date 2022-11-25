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
  const [chance, setChance] = useState(3);

  const handleUserInput = (e) => {
    setUserNumber(e.target.value);
  };

  const handleStart = () => {
    const num = Math.floor(Math.random() * 100);
    setComputerNumber(num);
    setUserNumber(0);
    setShowResult(false);
    setChance(3);
  };

  const handleWinner = () => {
    setShowResult(true);

    if (Number(userNumber) === computerNumber) {
      setWinner(true);
      setChance(4);
    } else if (Number(userNumber) > computerNumber) {
      setBigNum(true);
      setWinner(false);
    } else if (Number(userNumber) < computerNumber) {
      setBigNum(false);
      setWinner(false);
    }

    if (chance === 0) {
      setChance(3);
    } else {
      setChance((c) => c - 1);
    }
  };

  return (
    <div className='game'>
      <h1>Number Guessing Game</h1>
      <h2>I am thinking of a number between 1-100</h2>
      <h2>Can you guess?</h2>
      <button className='start-button' onClick={handleStart}>
        Start the game
      </button>
      <div className='input-container'>
        <input
          className='input'
          value={userNumber}
          onChange={handleUserInput}
        />
        <button className='guess-button' onClick={handleWinner}>
          Guess
        </button>
      </div>
      <div>
        {chance === 3 ? (
          <p className='initial-chance'>You have {chance} chances.</p>
        ) : null}
        {showResult ? (
          <Result
            user={userNumber}
            computer={computerNumber}
            winner={winner}
            bigNum={bigNum}
            chance={chance}
          />
        ) : null}
      </div>

      <button className='restart-button' onClick={handleStart}>
        Restart
      </button>
    </div>
  );
}
