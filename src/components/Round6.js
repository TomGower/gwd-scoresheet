import React from 'react';
import PropTypes from 'prop-types';
import TwoPartQuestion from './TwoPartQuestion';
import getColors from '../functions/getColors';

const RoundSix = ({
  updater, info,
}) => {
  const { answers, round, scores } = info;
  const colors = getColors(scores);

  return (
    <div>
      <h4>
        {`Round ${round}`}
      </h4>
      <TwoPartQuestion
        round={round}
        number={1}
        color1={colors[0]}
        answer1={answers[0]}
        checked1={colors[0] === 'green' ? 'checked' : false}
        color2={colors[1]}
        answer2={answers[1]}
        checked2={colors[1] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={2}
        color1={colors[2]}
        answer1={answers[2]}
        checked1={colors[2] === 'green' ? 'checked' : false}
        color2={colors[3]}
        answer2={answers[3]}
        checked2={colors[3] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={3}
        color1={colors[4]}
        answer1={answers[4]}
        checked1={colors[4] === 'green' ? 'checked' : false}
        color2={colors[5]}
        answer2={answers[5]}
        checked2={colors[5] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={4}
        color1={colors[6]}
        answer1={answers[6]}
        checked1={colors[6] === 'green' ? 'checked' : false}
        color2={colors[7]}
        answer2={answers[7]}
        checked2={colors[7] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={5}
        color1={colors[8]}
        answer1={answers[8]}
        checked1={colors[8] === 'green' ? 'checked' : false}
        color2={colors[9]}
        answer2={answers[9]}
        checked2={colors[9] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={6}
        color1={colors[10]}
        answer1={answers[10]}
        checked1={colors[10] === 'green' ? 'checked' : false}
        color2={colors[11]}
        answer2={answers[11]}
        checked2={colors[11] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={7}
        color1={colors[12]}
        answer1={answers[12]}
        checked1={colors[12] === 'green' ? 'checked' : false}
        color2={colors[13]}
        answer2={answers[13]}
        checked2={colors[13] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={round}
        number={8}
        color1={colors[14]}
        answer1={answers[14]}
        checked1={colors[14] === 'green' ? 'checked' : false}
        color2={colors[15]}
        answer2={answers[15]}
        checked2={colors[15] === 'green' ? 'checked' : false}
      />
      <br />
      <button value={round} onClick={updater} type="button">
        {`CLICK TO UPDATE YOUR ROUND ${round} ANSWERS AND SCORE`}
      </button>
    </div>
  );
};

export default RoundSix;

RoundSix.propTypes = {
  info: PropTypes.shape({
    round: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  updater: PropTypes.func.isRequired,
};
