/* eslint-disable react/prop-types */
import React from 'react';

const JokerInput = ({ round }) => (
  <>
    <label htmlFor={`Jround${round}`}>
      <input type="radio" id={`Jround${round}`} name="joker" value={`r${round}`} data-input={round} />
      {`Round ${round}`}
    </label>
  </>
);

const rounds = [1, 2, 3, 4, 5, 6, 7];

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
