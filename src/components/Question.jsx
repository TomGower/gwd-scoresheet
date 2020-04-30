/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Question = ({
  thisColor, round, answer, number,
}) => (
  <div>
    <strong>
      Question {number}
    </strong>
    <br />
    <span style={{ color: thisColor }}>Answer</span>: <input className="answer" id={`round${round}answer q${number}`} defaultValue={answer} />
    <input type="checkbox" id={`round${round} question${number}`} /><label htmlFor={`question${number}`}>Check if correct</label>
    <br />
  </div>
);

export default Question;
