/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Question from './Question';
import TwoPartQuestion from './TwoPartQuestion';

const RoundOne = ({
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

  if (info.special) {
    return (
      <div>
        <h4>Round {info.round}</h4>
        <TwoPartQuestion
          round={info.round}
          number={1}
          color1={holder.q1}
          answer1={info.answers[0]}
          checked1={holder.q1 === 'green' ? 'checked' : false}
          color2={holder.q2}
          answer2={info.answers[1]}
          checked2={holder.q2 === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion round={info.round} number={2} color1={holder.q3} answer1={info.answers[2]} checked1={holder.q3 === 'green' ? 'checked' : false} color2={holder.q4} answer2={info.answers[3]} checked2={holder.q4 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={3} color1={holder.q5} answer1={info.answers[4]} checked1={holder.q5 === 'green' ? 'checked' : false} color2={holder.q6} answer2={info.answers[5]} checked2={holder.q6 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={4} color1={holder.q7} answer1={info.answers[6]} checked1={holder.q7 === 'green' ? 'checked' : false} color2={holder.q8} answer2={info.answers[7]} checked2={holder.q8 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={5} color1={holder.q9} answer1={info.answers[8]} checked1={holder.q9 === 'green' ? 'checked' : false} color2={holder.q10} answer2={info.answers[9]} checked2={holder.q10 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={6} color1={holder.q11} answer1={info.answers[10]} checked1={holder.q11 === 'green' ? 'checked' : false} color2={holder.q12} answer2={info.answers[11]} checked2={holder.q12 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={7} color1={holder.q13} answer1={info.answers[12]} checked1={holder.q13 === 'green' ? 'checked' : false} color2={holder.q14} answer2={info.answers[13]} checked2={holder.q14 === 'green' ? 'checked' : false} />
        <TwoPartQuestion round={info.round} number={8} color1={holder.q15} answer1={info.answers[14]} checked1={holder.q15 === 'green' ? 'checked' : false} color2={holder.q16} answer2={info.answers[15]} checked2={holder.q16 === 'green' ? 'checked' : false} />
        <br />
        <button value={info.round} onClick={updater} type="button">
          CLICK TO UPDATE YOUR ROUND {info.round} ANSWERS AND SCORE
        </button>
      </div>
    );
  }

  return (
    <div>
      <h4>Round {info.round}</h4>
      <Question thisColor={holder.q1} round={info.round} answer={info.answers[0]} number={1} checked={holder.q1 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q2} round={info.round} answer={info.answers[1]} number={2} checked={holder.q2 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q3} round={info.round} answer={info.answers[2]} number={3} checked={holder.q3 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q4} round={info.round} answer={info.answers[3]} number={4} checked={holder.q4 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q5} round={info.round} answer={info.answers[4]} number={5} checked={holder.q5 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q6} round={info.round} answer={info.answers[5]} number={6} checked={holder.q6 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q7} round={info.round} answer={info.answers[6]} number={7} checked={holder.q7 === 'green' ? 'checked' : false} />
      <Question thisColor={holder.q8} round={info.round} answer={info.answers[7]} number={8} checked={holder.q8 === 'green' ? 'checked' : false} />
      <br />
      <button value={info.round} onClick={updater} type="button">
        CLICK TO UPDATE YOUR ROUND {info.round} ANSWERS AND SCORE
      </button>
    </div>
  );
};

export default RoundOne;
