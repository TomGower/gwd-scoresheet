import React from 'react';
import PropTypes from 'prop-types';
import MusicQuestion from './MusicQuestion';
import getColors from '../functions/getColors';

const MusicRound = ({
  info, updater,
}) => {
  const { answers, round, scores } = info;
  const colors = getColors(scores);

  return (
    <div>
      <h4>
        {`Round ${round}`}
      </h4>
      <MusicQuestion
        round={2}
        number={1}
        titleColor={colors[0]}
        artistColor={colors[1]}
        titleAnswer={answers[0]}
        artistAnswer={answers[1]}
        titleChecked={colors[0] === 'green' ? 'checked' : false}
        artistChecked={colors[1] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={2}
        titleColor={colors[2]}
        artistColor={colors[3]}
        titleAnswer={answers[2]}
        artistAnswer={answers[3]}
        titleChecked={colors[2] === 'green' ? 'checked' : false}
        artistChecked={colors[3] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={3}
        titleColor={colors[4]}
        artistColor={colors[5]}
        titleAnswer={answers[4]}
        artistAnswer={answers[5]}
        titleChecked={colors[4] === 'green' ? 'checked' : false}
        artistChecked={colors[5] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={4}
        titleColor={colors[6]}
        artistColor={colors[7]}
        titleAnswer={answers[6]}
        artistAnswer={answers[7]}
        titleChecked={colors[6] === 'green' ? 'checked' : false}
        artistChecked={colors[7] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={5}
        titleColor={colors[8]}
        artistColor={colors[9]}
        titleAnswer={answers[8]}
        artistAnswer={answers[9]}
        titleChecked={colors[8] === 'green' ? 'checked' : false}
        artistChecked={colors[9] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={6}
        titleColor={colors[10]}
        artistColor={colors[11]}
        titleAnswer={answers[10]}
        artistAnswer={answers[11]}
        titleChecked={colors[10] === 'green' ? 'checked' : false}
        artistChecked={colors[11] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={7}
        titleColor={colors[12]}
        artistColor={colors[13]}
        titleAnswer={answers[12]}
        artistAnswer={answers[13]}
        titleChecked={colors[12] === 'green' ? 'checked' : false}
        artistChecked={colors[13] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={8}
        titleColor={colors[14]}
        artistColor={colors[15]}
        titleAnswer={answers[14]}
        artistAnswer={answers[15]}
        titleChecked={colors[14] === 'green' ? 'checked' : false}
        artistChecked={colors[15] === 'green' ? 'checked' : false}
      />
      <br />
      <button value={round} onClick={updater} type="button">
        {`CLICK TO UPDATE YOUR ROUND ${round} ANSWERS AND SCORE`}
      </button>
    </div>
  );
};

export default MusicRound;

MusicRound.propTypes = {
  info: PropTypes.shape({
    round: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  updater: PropTypes.func.isRequired,
};
