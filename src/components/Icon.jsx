import styled from 'styled-components';
import React from 'react';
import { Title, TitleMenor, Login, Field, Actions, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForgotPassword } from  "../pages/LoginPages/styles"

// import { Container } from './styles';

export default function Icon({color, children}) {
  return (
    <StyledIcon background={color}>{children}</StyledIcon>
  )

}

const StyledIcon = styled(Login)`
    background: ${(props) => props.background};
    box-shadow: 0 8px 32px 0 rgba(31,38,135, 0.37);
    border-radius: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height:1.5rem;
    }
`;
