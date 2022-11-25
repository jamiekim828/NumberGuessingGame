import React from 'react';
import { useState } from 'react';

export default function Game() {
  // state
  const [userNumber, setUserNumber] = useState(0);
  const [computerNumber, setComputerNumber] = useState();
  const [winner, setWinner] = useState();
  const [bigNum, setBigNum] = useState();

  const handleUserInput = (e) => {
    setUserNumber(e.target.value);
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
      <input value={userNumber} onChange={handleUserInput} />
      <button onClick={handleWinner}>Guess</button>
      <p>Your guess : {userNumber}</p>
      {console.log(
        console.log(typeof userNumber),
        userNumber,
        computerNumber,
        winner,
        bigNum
      )}
      {winner && <p>Yay! You got it!</p>}
      {bigNum ? <p>Your number is too high</p> : <p>Your number is too low</p>}
      <p>The number was {computerNumber}</p>
      <p>You have 3 chances.</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
