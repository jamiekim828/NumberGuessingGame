import React from 'react';
import { useState } from 'react';
import Result from './Result';

export default function Game() {
  // get random number for computer
  const randomNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  // state
  const [userNumber, setUserNumber] = useState(0);
  const [computerNumber, setComputerNumber] = useState(randomNumber());
  const [winner, setWinner] = useState();
  const [bigNum, setBigNum] = useState();
  const [showResult, setShowResult] = useState(false);
  const [chance, setChance] = useState(3);

  // function for input
  const handleUserInput = (e) => {
    setUserNumber(e.target.value);
  };

  // start button on click
  const handleStart = () => {
    // const num = Math.floor(Math.random() * 100);
    setComputerNumber(randomNumber());
    setUserNumber(0);
    setShowResult(false);
    setChance(3);
  };

  // guess button on click
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
      <h2>I am thinking of a number between 0-100</h2>
      <h2>Can you guess?</h2>
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
        {!winner && chance === 3 ? (
          <p className='initial-chance'>You have {chance} chances.</p>
        ) : null}
        {showResult ? (
          <Result
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
