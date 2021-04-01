import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BonusQuestion = ({ roundNumber }) => (
  <>
    {`Round ${roundNumber} Bonus Question`}
    <br />
    <AnswerName>Answer:</AnswerName>
    <Answer />
    <label htmlFor={`bonusquestion${roundNumber}`}>
      <input type="checkbox" id={`bonusquestion${roundNumber}`} />
      Check if correct
    </label>
    <br />
  </>
);

const AnswerName = styled.span`
  display: inline-block;
  width: 75px;
`;

const Answer = styled.input`
  width: 300px;
  margin-bottom: 5px;
`;

export default BonusQuestion;

BonusQuestion.propTypes = {
  roundNumber: PropTypes.number.isRequired,
};
