/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const DisplayRound = ({
  round, updater, answers, scores,
}) => {
  const holder = {};
  for (let i = 0; i < scores.length; i += 1) {
    const thisVar = `q${i + 1}`;
    if (parseInt(scores[i], 10) === 1) {
      holder[thisVar] = 'green';
    } else if (scores[i] === '') {
      holder[thisVar] = 'black';
    } else if (parseInt(scores[i], 10) === 0) {
      holder[thisVar] = 'red';
    }
  }

  return (
    <div>
      <h4>
        Round {round}
      </h4>
      <strong>Question 1</strong><br />
      <span style={{ color: holder.q1 }}>Answer</span>: <input className="answer" id={`round${round}answer q2`} defaultValue={answers[1]} /><input type="checkbox" id={`round${round} question2`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 2</strong><br />
      <span style={{ color: holder.q2 }}>Answer</span>: <input className="answer" id={`round${round}answer q2`} defaultValue={answers[1]} /><input type="checkbox" id={`round${round} question2`} /><label htmlFor="question2">Check if correct</label><br />
      <strong>Question 3</strong><br />
      <span style={{ color: holder.q3 }}>Answer</span>: <input className="answer" id={`round${round}answer q3`} defaultValue={answers[2]} /><input type="checkbox" id={`round${round} question3`} /><label htmlFor="question3">Check if correct</label><br />
      <strong>Question 4</strong><br />
      <span style={{ color: holder.q4 }}>Answer</span>: <input className="answer" id={`round${round}answer q4`} defaultValue={answers[3]} /><input type="checkbox" id={`round${round} question4`} /><label htmlFor="question4">Check if correct</label><br />
      <strong>Question 5</strong><br />
      <span style={{ color: holder.q5 }}>Answer</span>: <input className="answer" id={`round${round}answer q5`} defaultValue={answers[4]} /><input type="checkbox" id={`round${round} question5`} /><label htmlFor="question5">Check if correct</label><br />
      <strong>Question 6</strong><br />
      <span style={{ color: holder.q6 }}>Answer</span>: <input className="answer" id={`round${round}answer q6`} defaultValue={answers[5]} /><input type="checkbox" id={`round${round} question6`} /><label htmlFor="question6">Check if correct</label><br />
      <strong>Question 7</strong><br />
      <span style={{ color: holder.q7 }}>Answer</span>: <input className="answer" id={`round${round}answer q7`} defaultValue={answers[6]} /><input type="checkbox" id={`round${round} question7`} /><label htmlFor="question7">Check if correct</label><br />
      <strong>Question 8</strong><br />
      <span style={{ color: holder.q8 }}>Answer</span>: <input className="answer" id={`round${round}answer q8`} defaultValue={answers[7]} /><input type="checkbox" id={`round${round} question8`} /><label htmlFor="question8">Check if correct</label><br />
      <br />
      <button value={round} onClick={updater} type="button">CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
    </div>
  );
};

const MemodDisplayRound = React.memo(DisplayRound);

export default MemodDisplayRound;
