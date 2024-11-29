import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
  &::before {
    content: '← ';
  }
`;

const BackButton = ({ to }) => {
  return (
    <StyledBackButton to={to}>
      Back
    </StyledBackButton>
  );
};

export default BackButton;
