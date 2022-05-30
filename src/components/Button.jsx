import styled from "styled-components";

// import { Container } from './styles';

import React from 'react';

// import { Container } from './styles';
export default function Button({content}) {
  return <StyledButton>
      {content}
  </StyledButton>;
}


const StyledButton = styled.button`
    background: linear-gradient(to right, #14163c, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: flex;
    height: 2rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;
