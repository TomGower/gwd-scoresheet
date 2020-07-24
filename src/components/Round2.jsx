/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import MusicQuestion from './MusicQuestion';

const MusicRound = ({
  info, updater,
}) => {
  const colors = {};
  for (let i = 0; i < info.scores.length; i += 1) {
    const current = `q${i + 1}`;
    if (parseInt(info.scores[i], 10) === 1) {
      colors[current] = 'green';
    } else if (info.scores[i] === '') {
      colors[current] = 'black';
    } else if (parseInt(info.scores[i], 10) === 0) {
      colors[current] = 'red';
    }
  }

  return (
    <div>
      <h4>
        Round {info.round}
      </h4>
      <MusicQuestion
        round={2}
        number={1}
        titleColor={colors.q1}
        artistColor={colors.q2}
        titleAnswer={info.answers[0]}
        artistAnswer={info.answers[1]}
      />
      <MusicQuestion
        round={2}
        number={2}
        titleColor={colors.q3}
        artistColor={colors.q4}
        titleAnswer={info.answers[2]}
        artistAnswer={info.answers[3]}
      />
      <MusicQuestion
        round={2}
        number={3}
        titleColor={colors.q5}
        artistColor={colors.q6}
        titleAnswer={info.answers[4]}
        artistAnswer={info.answers[5]}
      />
      <MusicQuestion
        round={2}
        number={4}
        titleColor={colors.q7}
        artistColor={colors.q8}
        titleAnswer={info.answers[6]}
        artistAnswer={info.answers[7]}
      />
      <MusicQuestion
        round={2}
        number={5}
        titleColor={colors.q9}
        artistColor={colors.q10}
        titleAnswer={info.answers[8]}
        artistAnswer={info.answers[9]}
      />
      <MusicQuestion
        round={2}
        number={6}
        titleColor={colors.q11}
        artistColor={colors.q12}
        titleAnswer={info.answers[10]}
        artistAnswer={info.answers[11]}
      />
      <MusicQuestion
        round={2}
        number={7}
        titleColor={colors.q13}
        artistColor={colors.q14}
        titleAnswer={info.answers[12]}
        artistAnswer={info.answers[13]}
      />
      <MusicQuestion
        round={2}
        number={8}
        titleColor={colors.q15}
        artistColor={colors.q16}
        titleAnswer={info.answers[14]}
        artistAnswer={info.answers[15]}
      />
      <br />
      <button value={info.round} onClick={updater} type="button">
        CLICK TO UPDATE YOUR ROUND {info.round} ANSWERS AND SCORE
      </button>
    </div>
  );
};

export default MusicRound;
