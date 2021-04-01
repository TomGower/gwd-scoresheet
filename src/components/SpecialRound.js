import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpecialRound = ({ checkSpecialRound }) => (
  <Wrapper>
    <Description>Pick which rounds are special 16-point rounds!</Description>
    <InputWrapper>
      <label htmlFor="Bround1">
        <input type="checkbox" id="Bround1" name="bonus" value="r1" />
        Round 1
      </label>
      <label htmlFor="Bround3">
        <input type="checkbox" id="Bround3" name="bonus" value="r3" />
        Round 3
      </label>
      <label htmlFor="Bround4">
        <input type="checkbox" id="Bround4" name="bonus" value="r4" />
        Round 4
      </label>
      <label htmlFor="Bround5">
        <input type="checkbox" id="Bround5" name="bonus" value="r5" />
        Round 5
      </label>
    </InputWrapper>
    <div>
      <button type="submit" id="bonusButton" onClick={checkSpecialRound}>Submit Special 16-Point Round Selections</button>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
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
