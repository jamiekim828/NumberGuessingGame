import React from 'react';

export default function Result({ user, computer, winner, bigNum, chance }) {
  console.log(user, computer, winner, bigNum, chance);
  return (
    <div>
      {winner && <p>Yay! You got it!</p>}
      {!winner && bigNum ? (
        <p>Your number is big. Try again!</p>
      ) : !winner && !bigNum ? (
        <p>Your number is small. Try again!</p>
      ) : null}

      {!winner && chance > 0 ? (
        <p>You have {chance} chance(s) left.</p>
      ) : !winner && chance === 0 ? (
        <p>You lost! Please restart.</p>
      ) : winner ? null : null}
    </div>
  );
}
