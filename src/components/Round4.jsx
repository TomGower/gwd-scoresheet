import React from 'react';
import Question from './Question.jsx';

const RoundFour = ({round, updater, answers, scores}) => {
  let holder = {};
  for (let i = 0; i < scores.length; i++) {
    let thisVar = `q${i+1}`;
    if (parseInt(scores[i]) === 1) {
      holder[thisVar] = 'green';
    } else if (scores[i] === '') {
      holder[thisVar] = 'black';
    } else if (parseInt(scores[i]) === 0) {
      holder[thisVar] = 'red';
    }
  }

  return (
    <div>
      <h4>Round {round}</h4>
      <Question thisColor={holder.q1} round={round} answer={answers[0]} number={1}/>
      <Question thisColor={holder.q2} round={round} answer={answers[1]} number={2}/>
      <Question thisColor={holder.q3} round={round} answer={answers[2]} number={3}/>
      <Question thisColor={holder.q4} round={round} answer={answers[3]} number={4}/>
      <Question thisColor={holder.q5} round={round} answer={answers[4]} number={5}/>
      <Question thisColor={holder.q6} round={round} answer={answers[5]} number={6}/>
      <Question thisColor={holder.q7} round={round} answer={answers[6]} number={7}/>
      <Question thisColor={holder.q8} round={round} answer={answers[7]} number={8}/>
      <br />
      <button value={round} onClick={updater}>CLICK TO UPDATE YOUR ROUND {round} ANSWERS AND SCORE</button>
    </div>
  )
}

export default RoundFour;
