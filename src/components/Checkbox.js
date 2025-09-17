
import PropTypes from 'prop-types';

const Checkbox = ({ number, round, isChecked }) => (
  <label htmlFor={`question${number}`}>
    <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!isChecked} />
    Check if correct
  </label>
);

export default Checkbox;

Checkbox.propTypes = {
  number: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
