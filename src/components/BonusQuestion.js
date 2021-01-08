import React from 'react';
import PropTypes from 'prop-types';

const BonusQuestion = ({ roundNumber }) => (
  <>
    {`Round ${roundNumber} Bonus Question`}
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <label htmlFor={`bonusquestion${roundNumber}`}>
      <input type="checkbox" id={`bonusquestion${roundNumber}`} />
      Check if correct
    </label>
    <br />
  </>
);

export default BonusQuestion;

BonusQuestion.propTypes = {
  roundNumber: PropTypes.number.isRequired,
};
