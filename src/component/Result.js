import React from 'react';

export default function Result({ user, computer, winner, bigNum }) {
  console.log(user, computer, winner, bigNum);
  return (
    <div>
      {winner && <p>Yay! You got it!</p>}
      {!winner && bigNum ? (
        <p>Your number is big. Try again!</p>
      ) : !winner && !bigNum ? (
        <p>Your number is small. Try again!</p>
      ) : null}
    </div>
  );
}
