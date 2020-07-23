/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const MusicRound = ({
  info, updater,
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
      <h4>
        Round {info.round}
      </h4>
      <strong>Question 1</strong><br />
      <span style={{ color: holder.q1 }}>Title</span>: <input className="answer" id={`round${info.round}answer q1a`} defaultValue={info.answers[0]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q2 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q1b`} defaultValue={info.answers[1]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 2</strong><br />
      <span style={{ color: holder.q3 }}>Title</span>: <input className="answer" id={`round${info.round}answer q2a`} defaultValue={info.answers[2]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q4 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q2b`} defaultValue={info.answers[3]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 3</strong><br />
      <span style={{ color: holder.q5 }}>Title</span>: <input className="answer" id={`round${info.round}answer q3a`} defaultValue={info.answers[4]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q6 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q3b`} defaultValue={info.answers[5]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 4</strong><br />
      <span style={{ color: holder.q7 }}>Title</span>: <input className="answer" id={`round${info.round}answer q4a`} defaultValue={info.answers[6]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q8 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q4b`} defaultValue={info.answers[7]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 5</strong><br />
      <span style={{ color: holder.q9 }}>Title</span>: <input className="answer" id={`round${info.round}answer q5a`} defaultValue={info.answers[8]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q10 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q5b`} defaultValue={info.answers[9]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 6</strong><br />
      <span style={{ color: holder.q11 }}>Title</span>: <input className="answer" id={`round${info.round}answer q6a`} defaultValue={info.answers[10]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q12 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q6b`} defaultValue={info.answers[11]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 7</strong><br />
      <span style={{ color: holder.q13 }}>Title</span>: <input className="answer" id={`round${info.round}answer q7a`} defaultValue={info.answers[12]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q14 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q7b`} defaultValue={info.answers[13]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <strong>Question 8</strong><br />
      <span style={{ color: holder.q15 }}>Title</span>: <input className="answer" id={`round${info.round}answer q8a`} defaultValue={info.answers[14]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <span style={{ color: holder.q16 }}>Artist</span>: <input className="answer" id={`round${info.round}answer q8b`} defaultValue={info.answers[15]} /><input type="checkbox" id={`round${info.round} question1`} /><label htmlFor="question1">Check if correct</label><br />
      <br />
      <button value={info.round} onClick={updater} type="button">
        CLICK TO UPDATE YOUR ROUND {info.round} ANSWERS AND SCORE
      </button>
    </div>
  );
};

export default MusicRound;
