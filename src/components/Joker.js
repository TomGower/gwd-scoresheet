
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JokerInput = ({ round }) => (
  <>
    <label htmlFor={`Jround${round}`}>
      <input type="radio" id={`Jround${round}`} name="joker" value={`r${round}`} data-input={round} />
      {`Round ${round}`}
    </label>
  </>
);

const rounds = [1, 2, 3, 4, 5, 6, 7];

const Joker = ({ pickJoker }) => (
  <Wrapper onSubmit={pickJoker}>
    <Description>Pick which round you want to totally joker!</Description>
    <ButtonWrapper>
      {rounds.map((round) => <JokerInput round={round} key={round} />)}
    </ButtonWrapper>
    <button type="submit" id="jokerButton">Submit Joker Round Selection</button>
  </Wrapper>
);

// eslint-disable-next-line no-unused-vars
const Wrapper = styled.form`
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 0.5rem;
`;

export default Joker;

JokerInput.propTypes = {
  round: PropTypes.number.isRequired,
};

Joker.propTypes = {
  pickJoker: PropTypes.func.isRequired,
};
