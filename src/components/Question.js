/* eslint-disable react/prop-types */
import React from 'react';

const Question = ({
  thisColor, round, answer, number, checked = false,
}) => (
  <div>
    <strong>{`Question ${number}`}</strong>
    <br />
    <span style={{ color: thisColor }}>{'Answer: '}</span>
    <input className="answer" id={`round${round}answer q${number}`} defaultValue={answer} />
    <label htmlFor={`question${number}`}>
      <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!checked} />
      Check if correct
    </label>
    <br />
  </div>
);

export default Question;
