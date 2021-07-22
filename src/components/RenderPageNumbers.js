import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageNumber from './PageNumber';

const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

const RenderPageNumbers = ({ handleClick }) => (
  <Wrapper>
    {pageNumbers.map(
      (number) => (<PageNumber key={number} number={number} handleClick={handleClick} />),
    )}
  </Wrapper>
);

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
`;

RenderPageNumbers.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default RenderPageNumbers;
