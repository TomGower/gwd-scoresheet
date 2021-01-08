import React from 'react';
import PropTypes from 'prop-types';

const MusicQuestion = ({
  titleColor, artistColor, titleAnswer, artistAnswer, titleChecked, artistChecked, number, round,
}) => (
  <div>
    <strong>
      {`Question ${number}`}
    </strong>
    <br />
    <span style={{ color: titleColor }}>Title</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}a`} defaultValue={titleAnswer} />
    <label htmlFor={`question${number}`}>
      <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!titleChecked} />
      Check if correct
    </label>
    <br />
    <span style={{ color: artistColor }}>Artist</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}b`} defaultValue={artistAnswer} />
    <label htmlFor={`question${number}`}>
      <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!artistChecked} />
      Check if correct
    </label>
    <br />
  </div>
);

export default MusicQuestion;

MusicQuestion.propTypes = {
  titleColor: PropTypes.string.isRequired,
  artistColor: PropTypes.string.isRequired,
  titleAnswer: PropTypes.string.isRequired,
  artistAnswer: PropTypes.string.isRequired,
  titleChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  artistChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  number: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};
