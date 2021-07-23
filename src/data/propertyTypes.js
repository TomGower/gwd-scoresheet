import PropTypes from 'prop-types';

const propertyTypes = {
  roundInfo: {
    round: PropTypes.number.isRequired,
    special: PropTypes.bool.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
  },
  specialRoundInfo: {
    round: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
  },
};

export default propertyTypes;
