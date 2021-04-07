import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';
import TwoPartQuestion from './TwoPartQuestion';
import getColors from '../functions/getColors';

const RandomRound = ({
  updater, info,
}) => {
  const { answers, round, scores } = info;
  const colors = getColors(scores);

  return (
    <div>
      <h4>
        {`Round ${round}`}
      </h4>
      <Question
        thisColor={colors[0]}
        round={round}
        answer={answers[0]}
        number={1}
        checked={colors[0] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={2}
        color1={colors[1]}
        answer1={answers[1]}
        checked1={colors[1] === 'green' ? 'checked' : false}
        color2={colors[2]}
        answer2={answers[2]}
        checked2={colors[2] === 'green' ? 'checked' : false}
      />
      <QuestionWrapper>
        <QuestionLabel>Sheer Quotient</QuestionLabel>
        <AnswerName style={{ color: colors[3] }}>{'Answer: '}</AnswerName>
        <Answer id={`round${round}answer q3`} defaultValue={answers[3]} />
        <label htmlFor="question3">
          <input type="checkbox" id={`round${round} question3`} defaultChecked={!!(colors[3] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionLabel>Question 4</QuestionLabel>
        <AnswerName style={{ color: colors[4] }}>{'Answer A: '}</AnswerName>
        <Answer id={`round${round}answer q4a`} defaultValue={answers[4]} />
        <label htmlFor="question4a">
          <input type="checkbox" id={`round${round} question4a`} defaultChecked={!!(colors[4] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[5] }}>{'Answer B: '}</AnswerName>
        <Answer id={`round${round}answer q4b`} defaultValue={answers[5]} />
        <label htmlFor="question4b">
          <input type="checkbox" id={`round${round} question4b`} defaultChecked={!!(colors[5] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[6] }}>{'Answer C: '}</AnswerName>
        <Answer id={`round${round}answer q4c`} defaultValue={answers[6]} />
        <label htmlFor="question4c">
          <input type="checkbox" id={`round${round} question4c`} defaultChecked={!!(colors[6] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
      </QuestionWrapper>
      <Question
        round={round}
        number={5}
        thisColor={colors[7]}
        answer={answers[7]}
        checked={colors[7] === 'green' ? 'checked' : false}
      />
      <QuestionWrapper>
        <QuestionLabel>Question 6</QuestionLabel>
        <AnswerName style={{ color: colors[8] }}>{'Answer A: '}</AnswerName>
        <Answer id={`round${round}answer q6a`} defaultValue={answers[8]} />
        <label htmlFor="question6a">
          <input type="checkbox" id={`round${round} question6a`} defaultChecked={!!(colors[8] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[9] }}>{'Answer B: '}</AnswerName>
        <Answer id={`round${round}answer q6b`} defaultValue={answers[9]} />
        <label htmlFor="question6b">
          <input type="checkbox" id={`round${round} question6b`} defaultChecked={!!(colors[9] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[10] }}>{'Answer C: '}</AnswerName>
        <Answer id={`round${round}answer q6c`} defaultValue={answers[10]} />
        <label htmlFor="question6c">
          <input type="checkbox" id={`round${round} question6c`} defaultChecked={!!(colors[10] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
      </QuestionWrapper>
      <Question
        round={round}
        number={7}
        thisColor={colors[11]}
        answer={answers[11]}
        checked={colors[11] === 'green' ? 'checked' : false}
      />
      <QuestionWrapper>
        <QuestionLabel>Question 8</QuestionLabel>
        <AnswerName style={{ color: colors[12] }}>{'Answer A: '}</AnswerName>
        <Answer id={`round${round}answer q8a`} defaultValue={answers[12]} />
        <label htmlFor="question8a">
          <input type="checkbox" id={`round${round} question8a`} defaultChecked={!!(colors[12] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[13] }}>{'Answer B: '}</AnswerName>
        <Answer id={`round${round}answer q8b`} defaultValue={answers[13]} />
        <label htmlFor="question8b">
          <input type="checkbox" id={`round${round} question8b`} defaultChecked={!!(colors[13] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[14] }}>{'Answer C: '}</AnswerName>
        <Answer id={`round${round}answer q8c`} defaultValue={answers[14]} />
        <label htmlFor="question8c">
          <input type="checkbox" id={`round${round} question8c`} defaultChecked={!!(colors[14] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
        <br />
        <AnswerName style={{ color: colors[15] }}>{'Answer D: '}</AnswerName>
        <Answer id={`round${round}answer q8d`} defaultValue={answers[15]} />
        <label htmlFor="question8d">
          <input type="checkbox" id={`round${round} question8d`} defaultChecked={!!(colors[15] === 'green' ? 'checked' : false)} />
          Check if correct
        </label>
      </QuestionWrapper>
      <br />
      <button value={round} onClick={updater} type="button">
        {`CLICK TO UPDATE YOUR ROUND ${round} ANSWERS AND SCORE`}
      </button>
    </div>
  );
};

const QuestionWrapper = styled.div`
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

export default RandomRound;

RandomRound.propTypes = {
  info: PropTypes.shape({
    round: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  updater: PropTypes.func.isRequired,
};
