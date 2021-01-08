/* eslint-disable react/prop-types */
import React from 'react';

const TwoPartQuestion = ({
  round, number, color1, answer1, checked1, color2, answer2, checked2,
}) => (
  <div>
    <strong>
      {`Question ${number}`}
    </strong>
    <br />
    <span style={{ color: color1 }}>{'Answer A: '}</span>
    <input className="answer" id={`round${round}answer q${number}a`} defaultValue={answer1} />
    <label htmlFor={`question${number}a`}>
      <input type="checkbox" id={`round${round} question${number}a`} defaultChecked={!!checked1} />
      Check if correct
    </label>
    <br />
    <span style={{ color: color2 }}>{'Answer B: '}</span>
    <input className="answer" id={`round${round}answer q${number}b`} defaultValue={answer2} />
    <label htmlFor={`question${number}b`}>
      <input type="checkbox" id={`round${round} question${number}b`} defaultChecked={!!checked2} />
      Check if correct
    </label>
    <br />
  </div>
);

export default TwoPartQuestion;
