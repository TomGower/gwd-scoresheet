/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const MusicQuestion = ({
  titleColor, artistColor, titleAnswer, artistAnswer, number, round,
}) => (
  <div>
    <strong>
      Question {number}
    </strong>
    <br />
    <span style={{ color: titleColor }}>Title</span>: <input className="answer" id={`round${round}answer q${number}a`} defaultValue={titleAnswer} />
    <input type="checkbox" id={`round${round} question${number}`} /><label htmlFor={`question${number}`}>Check if correct</label>
    <br />
    <span style={{ color: artistColor }}>Artist</span>: <input className="answer" id={`round${round}answer q${number}b`} defaultValue={artistAnswer} />
    <input type="checkbox" id={`round${round} question${number}`} /><label htmlFor={`question${number}`}>Check if correct</label>
    <br />
  </div>
);

export default MusicQuestion;
