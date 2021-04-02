import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MusicQuestion = ({
  titleColor, artistColor, titleAnswer, artistAnswer, titleChecked, artistChecked, number, round,
}) => (
  <Wrapper>
    <QuestionLabel>{`Question ${number}`}</QuestionLabel>
    <AnswerName style={{ color: titleColor }}>Title:</AnswerName>
    <Answer id={`round${round}answer q${number}a`} defaultValue={titleAnswer} />
    <label htmlFor={`question${number}`}>
      <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!titleChecked} />
      Check if correct
    </label>
    <br />
    <AnswerName style={{ color: artistColor }}>Artist:</AnswerName>
    <Answer id={`round${round}answer q${number}b`} defaultValue={artistAnswer} />
    <label htmlFor={`question${number}`}>
      <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!artistChecked} />
      Check if correct
    </label>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 6px;
`;

const QuestionLabel = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const AnswerName = styled.span`
  display: inline-block;
  width: 75px;
`;

const Answer = styled.input`
  width: 300px;
  margin-bottom: 5px;
`;

export default MusicQuestion;

MusicQuestion.propTypes = {
  titleColor: PropTypes.string.isRequired,
  artistColor: PropTypes.string.isRequired,
  titleAnswer: PropTypes.string.isRequired,
  artistAnswer: PropTypes.string.isRequired,
  titleChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  artistChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  number: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};
