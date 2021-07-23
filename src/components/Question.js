import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Question = ({
  thisColor, round, answer, number, checked = false,
}) => (
  <Wrapper>
    <QuestionLabel>{`Question ${number}`}</QuestionLabel>
    <AnswerName style={{ color: thisColor }}>{'Answer: '}</AnswerName>
    <Answer id={`round${round}answer q${number}`} defaultValue={answer} />
    <Checkbox round={round} number={number} isChecked={!!checked} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 6px;
`;

const QuestionLabel = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const Answer = styled.input`
  width: 300px;
  margin-bottom: 5px;
`;

const AnswerName = styled.span`
  display: inline-block;
  width: 75px;
`;

export default Question;

Question.propTypes = {
  thisColor: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
