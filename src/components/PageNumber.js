import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageNumber = ({ number, handleClick }) => (
  <Wrapper id={number} onClick={handleClick}>
    {number}
  </Wrapper>
);

const Wrapper = styled.li`
  margin-right: 0.5rem;
  color: blue;
  user-select: none;
  cursor: pointer;
`;

PageNumber.propTypes = {
  number: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PageNumber;
