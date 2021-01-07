/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const BonusQuestion = ({ roundNumber }) => (
  <>
    {`Round ${roundNumber} Bonus Question`}
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id={`bonusquestion${roundNumber}`} />
    <label htmlFor={`bonusquestion${roundNumber}`}>Check if correct</label>
    <br />
  </>
);

export default BonusQuestion;
