import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BonusQuestion = ({ roundNumber }) => (
  <Wrapper>
    <BonusQuestionLabel>
      {`Round ${roundNumber} Bonus Question`}
    </BonusQuestionLabel>
    <AnswerName>Answer:</AnswerName>
    <Answer />
    <label htmlFor={`bonusquestion${roundNumber}`}>
      <input type="checkbox" id={`bonusquestion${roundNumber}`} />
      Check if correct
    </label>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const BonusQuestionLabel = styled.div`
  margin-bottom: 0.25rem;
`;

const AnswerName = styled.span`
  display: inline-block;
  width: 75px;
`;

const Answer = styled.input`
  width: 300px;
`;

export default BonusQuestion;

BonusQuestion.propTypes = {
  roundNumber: PropTypes.number.isRequired,
};
