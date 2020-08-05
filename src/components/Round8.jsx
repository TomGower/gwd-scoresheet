/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Question from './Question';

const RandomRound = ({
  updater, info,
}) => {
  const holder = {};
  for (let i = 0; i < info.scores.length; i += 1) {
    const thisVar = `q${i + 1}`;
    if (parseInt(info.scores[i], 10) === 1) {
      holder[thisVar] = 'green';
    } else if (info.scores[i] === '') {
      holder[thisVar] = 'black';
    } else if (parseInt(info.scores[i], 10) === 0) {
      holder[thisVar] = 'red';
    }
  }

  return (
    <div>
      <h4>Round {info.round}</h4>
      <Question thisColor={holder.q1} round={info.round} answer={info.answers[0]} number={1} checked={holder.q1 === 'green' ? 'checked' : false} />
      <strong>Question 2</strong><br />
      <span style={{ color: holder.q2 }}>Answer A</span>: <input className="answer" id={`round${info.round}answer q2a`} defaultValue={info.answers[1]} /><input type="checkbox" id={`round${info.round} question2a`} /><label htmlFor="question2">Check if correct</label><br />
      <span style={{ color: holder.q3 }}>Answer B</span>: <input className="answer" id={`round${info.round}answer q2b`} defaultValue={info.answers[2]} /><input type="checkbox" id={`round${info.round} question2b`} /><label htmlFor="question2">Check if correct</label><br />
      <strong>Sheer Quotient</strong><br />
      <span style={{ color: holder.q4 }}>Answer</span>: <input className="answer" id={`round${info.round}answer q3`} defaultValue={info.answers[3]} /><input type="checkbox" id={`round${info.round} question3`} /><label htmlFor="question3">Check if correct</label><br />
      <strong>Question 4</strong><br />
      <span style={{ color: holder.q5 }}>Answer A</span>: <input className="answer" id={`round${info.round}answer q4a`} defaultValue={info.answers[4]} /><input type="checkbox" id={`round${info.round} question4a`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q6 }}>Answer B</span>: <input className="answer" id={`round${info.round}answer q4b`} defaultValue={info.answers[5]} /><input type="checkbox" id={`round${info.round} question4b`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q7 }}>Answer C</span>: <input className="answer" id={`round${info.round}answer q4c`} defaultValue={info.answers[6]} /><input type="checkbox" id={`round${info.round} question4c`} /><label htmlFor="question4">Check if correct</label><br />
      <Question thisColor={holder.q8} round={info.round} answer={info.answers[7]} number={5} checked={holder.q8 === 'green' ? 'checked' : false} />
      <strong>Question 6</strong><br />
      <span style={{ color: holder.q9 }}>Answer A</span>: <input className="answer" id={`round${info.round}answer q6a`} defaultValue={info.answers[8]} /><input type="checkbox" id={`round${info.round} question6a`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q10 }}>Answer B</span>: <input className="answer" id={`round${info.round}answer q6b`} defaultValue={info.answers[9]} /><input type="checkbox" id={`round${info.round} question6b`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q11 }}>Answer C</span>: <input className="answer" id={`round${info.round}answer q6c`} defaultValue={info.answers[10]} /><input type="checkbox" id={`round${info.round} question6c`} /><label htmlFor="question4">Check if correct</label><br />
      <Question thisColor={holder.q12} round={info.round} answer={info.answers[11]} number={7} checked={holder.q12 === 'green' ? 'checked' : false} />
      <strong>Question 8</strong><br />
      <span style={{ color: holder.q13 }}>Answer A</span>: <input className="answer" id={`round${info.round}answer q8a`} defaultValue={info.answers[12]} /><input type="checkbox" id={`round${info.round} question8a`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q14 }}>Answer B</span>: <input className="answer" id={`round${info.round}answer q8b`} defaultValue={info.answers[13]} /><input type="checkbox" id={`round${info.round} question8b`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q15 }}>Answer C</span>: <input className="answer" id={`round${info.round}answer q8c`} defaultValue={info.answers[14]} /><input type="checkbox" id={`round${info.round} question8c`} /><label htmlFor="question4">Check if correct</label><br />
      <span style={{ color: holder.q16 }}>Answer D</span>: <input className="answer" id={`round${info.round}answer q8d`} defaultValue={info.answers[15]} /><input type="checkbox" id={`round${info.round} question8d`} /><label htmlFor="question8">Check if correct</label><br />
      <br />
      <button value={info.round} onClick={updater} type="button">
        CLICK TO UPDATE YOUR ROUND {info.round} ANSWERS AND SCORE
      </button>
    </div>
  );
};

export default RandomRound;
