/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const JokerInput = (round) => (
  <>
    <input type="radio" id={`Jround${round}`} name="joker" value={`r${round}`} />
    <label htmlFor={`Jround${round}`}>{`Round ${round}`}</label>
  </>
);

const rounds = [1, 2, 3, 4, 5, 6, 7];

// eslint-disable-next-line react/prop-types
const Joker = ({ pickJoker }) => (
  <div>
    <p>Pick which round you want to joker!</p>
    <div>
      {rounds.map((round) => <JokerInput round={round} key={round} />)}
    </div>
    <div>
      <button type="submit" id="jokerButton" onClick={pickJoker}>Submit Joker Round Selection</button>
    </div>
  </div>
);

export default Joker;
