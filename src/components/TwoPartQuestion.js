import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TwoPartQuestion = ({
  round, number, color1, answer1, checked1, color2, answer2, checked2,
}) => (
  <div>
    <strong>
      {`Question ${number}`}
    </strong>
    <br />
    <AnswerName style={{ color: color1 }}>{'Answer A: '}</AnswerName>
    <Answer id={`round${round}answer q${number}a`} defaultValue={answer1} />
    <label htmlFor={`question${number}a`}>
      <input type="checkbox" id={`round${round} question${number}a`} defaultChecked={!!checked1} />
      Check if correct
    </label>
    <br />
    <AnswerName style={{ color: color2 }}>{'Answer B: '}</AnswerName>
    <Answer id={`round${round}answer q${number}b`} defaultValue={answer2} />
    <label htmlFor={`question${number}b`}>
      <input type="checkbox" id={`round${round} question${number}b`} defaultChecked={!!checked2} />
      Check if correct
    </label>
    <br />
  </div>
);

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
