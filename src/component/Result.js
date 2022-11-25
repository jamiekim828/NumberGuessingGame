import React from 'react';

export default function Result({ user, computer, winner, bigNum, chance }) {
  console.log(user, computer, winner, bigNum, chance);
  return (
    <div className='result-div'>
      <div className='result'>
        {winner && <p className='winner'>Yay! You got it!</p>}
        {!winner && bigNum ? (
          <p>Your number is big. Try again!</p>
        ) : !winner && !bigNum ? (
          <p>Your number is small. Try again!</p>
        ) : null}
      </div>
      {!winner && chance > 0 ? (
        <p>You have {chance} chance(s) left.</p>
      ) : !winner && chance === 0 ? (
        <p className='lost'>
          You lost! Please restart. The number was {computer}!!
        </p>
      ) : winner ? null : null}
    </div>
  );
}
