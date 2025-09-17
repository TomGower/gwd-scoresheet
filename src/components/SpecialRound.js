
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpecialRound = ({ checkSpecialRound }) => (
  <Wrapper onSubmit={checkSpecialRound}>
    <Description>Pick which rounds are special 16-point rounds!</Description>
    <InputWrapper>
      <label htmlFor="Bround1">
        <input type="checkbox" id="Bround1" name="bonus" value="r1" />
        <span>Round 1</span>
      </label>
      <label htmlFor="Bround3">
        <input type="checkbox" id="Bround3" name="bonus" value="r3" />
        <span>Round 3</span>
      </label>
      <label htmlFor="Bround4">
        <input type="checkbox" id="Bround4" name="bonus" value="r4" />
        <span>Round 4</span>
      </label>
      <label htmlFor="Bround5">
        <input type="checkbox" id="Bround5" name="bonus" value="r5" />
        <span>Round 5</span>
      </label>
    </InputWrapper>
    <button type="submit" id="bonusButton">Submit Special 16-Point Round Selections</button>
  </Wrapper>
);

const Wrapper = styled.form`
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  padding-bottom: 0.5rem;
`;

export default SpecialRound;

SpecialRound.propTypes = {
  checkSpecialRound: PropTypes.func.isRequired,
};
