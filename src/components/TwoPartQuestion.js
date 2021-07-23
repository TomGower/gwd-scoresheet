import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const TwoPartQuestion = ({
  round, number, color1, answer1, checked1, color2, answer2, checked2,
}) => (
  <Wrapper>
    <QuestionLabel>{`Question ${number}`}</QuestionLabel>
    <AnswerName style={{ color: color1 }}>{'Answer A: '}</AnswerName>
    <Answer id={`round${round}answer q${number}a`} defaultValue={answer1} />
    <Checkbox number={number * 100 + 1} round={round} isChecked={!!checked1} />
    <br />
    <AnswerName style={{ color: color2 }}>{'Answer B: '}</AnswerName>
    <Answer id={`round${round}answer q${number}b`} defaultValue={answer2} />
    <Checkbox number={number * 100 + 2} round={round} isChecked={!!checked2} />
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

export default TwoPartQuestion;

TwoPartQuestion.propTypes = {
  round: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  color1: PropTypes.string.isRequired,
  answer1: PropTypes.string.isRequired,
  checked1: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  color2: PropTypes.string.isRequired,
  answer2: PropTypes.string.isRequired,
  checked2: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
